import React from "react";
import {BlockQuote, DocLinks, ListItem, CodeComponent} from "../control";
import {Elink, Link} from "@beyond/ui/link/code";
import {Controls} from "./controls";
import {ModalImage} from "../modal-image";
import {isString} from "@cloudinary/url-gen/internal/utils/dataStructureUtils";

export function useRender(content: object, tpls = {}) {

    const controls = Controls;
    /**
     * q = quote
     * h = titles
     * p = paragraph
     * l = link
     * e = external link
     * t = deprecated
     * i = img
     * c = code
     */

    const regexp = /[q|h|p|l|e|t|i|c]{1}?\d{1}|items\d{0,1}|\d/;

    /**
     * @TODO: @julio: refactor and order
     * @param item
     * @param data
     * @param output
     * @param id
     */
    const analize = (item, data, output, id) => {
        const value = data[item];
        // validacion items

        const itemId = `${item}.${id}`;
        if (item.includes("items") && item.substring(0, 5) === "items") {
            const Control = controls.items;
            let items = [];
            let children = [];
            data[item].forEach((element, index) => {
                if (typeof element === "object") {
                    element = check(element, []);
                    items.push(<ListItem key={`element.sublist.${index}.${data[item].length}`} content={element}/>);
                    return;
                }
                items.push(<ListItem key={`${itemId}.${index}`} content={element}/>);
                return;
            });

            output.push(
                <Control key={`${id}${item}`} content={items}>
                    {children}
                </Control>
            );
            return;
        }

        /**
         * Si es un objeto recursivo
         */
        if (!regexp.test(item)) {
            check(data[item], output);
            return;
        }

        // blockQuote
        if (["q"].includes(item[0])) {

            const quote = isString(data[item]) ? data[item] : check(data[item], []);
            output.push(<BlockQuote key={itemId}>{quote}</BlockQuote>);
            return;
        }
        if (["i"].includes(item[0])) {
            const [src, alt] = data[item];
            output.push(<ModalImage key={itemId} src={src} alt={alt}/>)
            return;
        }
        if (["c"].includes(item[0])) {
            if (!tpls[data[item]]) {
                console.log(1, tpls)
                throw new Error(`the template "${data[item]}" were not found on ${item}`);
            }
            output.push(<CodeComponent key={itemId} content={tpls[data[item]]}/>)
            return;
        }
        //links
        if (["e", "l"].includes(item[0])) {
            const attrs = {
                key: `${id}${item}`,
                item: data[item],
            };
            if (item[0] === "e") attrs.external = true;
            output.push(<DocLinks {...attrs} />);
            return;
        }

        if (item[0] === 'p' && typeof data[item] === 'object') {
            const Control = controls[item[0]];
            const elements = check(data[item], output);
            output.push(
                <Control key={`${id}${item}`} selector={item} content={elements}/>
            );

        }
        if (item[0] === 'h') {
            const Control = controls[item[0]];

            output.push(
                <Control key={`${id}${item}`} selector={item} content={data[item]}/>
            );
            return;

        }
        if (typeof data[item] === "object") {
            check(data[item], output, item);
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
