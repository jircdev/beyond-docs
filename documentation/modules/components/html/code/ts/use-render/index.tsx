import React from "react";
import {BlockQuote, DocLinks, ListItem, CodeComponent, CustomComponent} from "../control";
import {Controls} from "./controls";
import {ModalImage} from "../modal-image";
import {isString} from "@cloudinary/url-gen/internal/utils/dataStructureUtils";
import {AppIcon} from "@beyond/docs/ui/icons";

export function useRender(content: object, tpls = {}, components = {}) {

    const controls = Controls;
    /**
     * q = quote
     * h = titles
     * p = paragraph
     * l = link
     * e = external link
     * t = deprecated
     * cc = CustomComponent
     * i = img
     * c = code
     * bi = BeyondIcon
     */

    const regexp = /[bi|q|h|p|l|e|t|i|c|cc]{1}?\d{1}|items\d{0,1}|\d/;

    /**
     * @TODO: @julio: refactor and order
     * @param item
     * @param data
     * @param output
     * @param id
     */
    const analize = (item, data, output, id) => {

        const elementData = data[item];
        const itemId = `${item}.${id}`;
        if (item.substring(0, 2) === 'bi') {
            output.push(<AppIcon icon={elementData} key={itemId}/>);
            return;
        }
        if (item.includes("items") && item.substring(0, 5) === "items") {
            const Control = controls.items;
            let items = [];
            let children = [];
            elementData.forEach((element, index) => {
                if (typeof element === "object") {
                    element = check(element);
                    items.push(<ListItem key={`element.sublist.${index}.${elementData.length}`} content={element}/>);
                    return;
                }
                items.push(<ListItem key={`${itemId}.${index}`} content={element}/>);
                return;
            });

            output.push(
                <Control key={`${id}${item}`} content={items} element={item}>
                    {children}
                </Control>
            );
            return;
        }

        /**
         * Si es un objeto recursivo
         */
        if (!regexp.test(item)) {

            const data = check(elementData);
            output = output.concat(data);
            return;
        }

        if (["cc"].includes(item.substring(0, 2))) {

            output.push(<CustomComponent key={itemId} content={content }control={elementData} components={components} tpls={tpls}/>);
            return;
        }
        // blockQuote
        if (["q"].includes(item[0])) {

            const quote = isString(elementData) ? elementData : check(elementData, []);
            output.push(<BlockQuote key={itemId}>{quote}</BlockQuote>);
            return;
        }
        if (["i"].includes(item[0])) {
            const [src, alt] = elementData;
            output.push(<ModalImage key={itemId} src={src} alt={alt}/>)
            return;
        }
        if (["c"].includes(item[0])) {
            if (!tpls[elementData]) {
                throw new Error(`the template "${elementData}" were not found on ${item}`);
            }
            output.push(<CodeComponent key={itemId} content={tpls[elementData]}/>)
            return;
        }
        //links
        if (["e", "l"].includes(item[0])) {
            const attrs = {
                key: `${id}${item}`,
                item: elementData,
            };
            if (item[0] === "e") attrs.external = true;
            output.push(<DocLinks {...attrs} />);
            return;
        }

        if (item[0] === 'p' && typeof elementData === 'object') {
            const Control = controls[item[0]];
            const elements = check(elementData, output);
            output.push(
                <Control key={`${id}${item}`} selector={item} content={elements}/>
            );
            return;

        }
        if (item[0] === 'h') {
            const Control = controls[item[0]];

            output.push(
                <Control key={`${id}${item}`} selector={item} content={elementData}/>
            );
            return;

        }
        if (typeof elementData === "object") {
            check(elementData);
            return;
        }
        const Control = controls[item[0]];

        output.push(
            <Control key={`${id}${item}`} selector={item} content={data[item]}/>
        );
    };

    let i = 0;
    const check = (data) => {
        const output = [];
        const id = `item.${performance.now()}.${Object.keys(data).join()}}`
        if (i > 50) return console.log("TOP.......");

        i++;
        const keys = Object.keys(data);

        keys.forEach((item, i) => {
            analize(item, data, output, `${id}.${i}`)
        });
        return output;
    };

    const output = check(content, []);
    // const output = check(content, []);
    return output;
}
