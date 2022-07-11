import * as React from 'react';
import {Elink, Link} from "@beyond/ui/link";
import {Code, CodeBox} from "@beyond/docs/code";
import {isString} from "@cloudinary/url-gen/internal/utils/dataStructureUtils";

export /*bundle*/ function CHtml({content, children}) {
    const data = children ?? content;
    return <span dangerouslySetInnerHTML={{__html: data}}/>
}

export /*bundle*/ function Paragraph({content, children}) {

    if (Array.isArray(content)) {
        return (<p>{content}</p>);
    }
    const data = children ?? content;
    return <p dangerouslySetInnerHTML={{__html: data}}/>
}

export /*bundle*/ function Title(props) {

    const {content, selector, children} = props;
    let data = children ?? content;

    const output = [];
    const [tag, idAttribute] = selector.split("#");
    const Control = ['h2', 'h3', 'h4', 'h5', 'h6'].includes(tag) ? tag : 'h1';
    if (Array.isArray(data)) {
        output.push(<span className={`pretitle-${tag}`} key="pretitle">{data[0]}</span>);
        data = data[1];
    }
    const attrs = {key: idAttribute ?? 'title'};
    if (idAttribute) attrs.id = idAttribute;
    output.push(<Control dangerouslySetInnerHTML={{__html: data}} {...attrs}/>);
    return <>{output}</>
}

export /*bundle*/ function List(props) {
    const {content, children, element} = props;
    const [name, className] = element.split(".");

    if (!Array.isArray(content)) {
        throw new Error('The content passed must be an array');
    }
    const attrs = {};
    if (className) attrs.className = className;
    return (
        <ul {...attrs}>
            {content.map((item, index) => {

                if (item?.type?.name === 'ListItem') {
                    return item;
                }

                if (Array.isArray(item)) {
                    const [label, href] = item;
                    return <li key={`${label}.${index}.arr`}><Link href={href}>{label}</Link></li>
                }
                if (typeof item === 'object') {
                    return <li key={`${index}.obj.${[performance.now()]}`}>{item}</li>
                }
                return <li key={`${index}.obj.${[performance.now()]}`} dangerouslySetInnerHTML={{__html: item}}/>
            })}

            {children}

        </ul>
    )
}

export function DocLinks({item: [href, label], external}) {
    const Control = external ? Elink : Link;
    return <Control href={href}>{label}</Control>
}

export function BlockQuote({children}) {
    return (<div className="block__note">{children}</div>)
}

/**
 * Render a list item that contains a nested list.
 * @constructor
 */
export function ListItem({content}) {
    if (isString(content)) {
        content = [<CHtml content={content} key={content}/>];
    }

    return (<li>{content}</li>)
}

export function CodeComponent({content}) {
    if (!content) {
        throw new Error('the content object is missing');
    }

    const {title, language = 'typescript', tpl} = content;
    const Control = title ? CodeBox : Code;
    return <Control title={title} language={language}>{tpl}</Control>
}

export function CustomComponent({components, control, content, tpls}) {

    if (!components.hasOwnProperty(control)) {
        console.warn(`custom component ${control} was not found`);
        return null;
    }
    const Control = components[control];

    return <Control tpls={tpls} content={content}/>

}
