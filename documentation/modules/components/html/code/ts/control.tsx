import * as React from 'react';
import {Elink, Link} from "@beyond/ui/link/code";
import {Code, CodeBox} from "@beyond/docs/code/code";
import {isString} from "@cloudinary/url-gen/internal/utils/dataStructureUtils";

export /*bundle*/ function CHtml({content, children}) {
    const data = children ?? content;
    return <span dangerouslySetInnerHTML={{__html: data}}/>
}

export /*bundle*/ function Paragraph({content, children}) {
    if (Array.isArray(content)) {

        return (
            <p>
                {content}
            </p>
        )
    }
    const data = children ?? content;
    return <p dangerouslySetInnerHTML={{__html: data}}/>
}

export /*bundle*/ function Title({content, selector, children}) {
    const data = children ?? content;
    const Control = ['h2', 'h3', 'h4'].includes(selector) ? selector : 'h1';
    return <Control dangerouslySetInnerHTML={{__html: data}}/>
}

export /*bundle*/ function List(props) {
    const {content, children} = props;
    if (!Array.isArray(content)) {
        console.log(3.5, content, children, props)
        throw new Error('The content passed must be an array');
    }
    return (
        <ul>
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
    return (
        <div className="block__note">{children}</div>
    )
}

/**
 * Render a list item that contains a nested list.
 * @constructor
 */
export function ListItem({content}) {
    const output = [];

    if (isString(content)) content = [content];
    content.map(item => output.push(item));
    return (<li>{output}</li>)
}

export function CodeComponent({content}) {
    if (!content) {
        throw new Error('the content object is missing');
    }
    console.log(55, content)
    const {title, language = 'typescript', tpl} = content;
    const Control = title ? CodeBox : Code;
    if (tpl)
        return <Control title={title} language={language}>{tpl}</Control>
}
