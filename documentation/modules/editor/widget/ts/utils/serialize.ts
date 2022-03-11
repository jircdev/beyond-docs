import {escapeHtml} from './escape-html';
import {Text, BaseEditor, Editor, Descendant, Transforms} from 'slate'

export const serialize = nodes => {

    nodes = Array.isArray(nodes) ? nodes : [nodes];

    return nodes.map(node => {
        if (Text.isText(node)) {
            let string = escapeHtml(node.text)
            if (node.bold) {
                string = `<strong>${string}</strong>`;
            }
            return string;
        }

        const children = node.children.map(n => serialize(n)).join('');

        switch (node.type) {
            case 'quote':
                return `<blockquote><p>${children}</p></blockquote>`;
            case 'paragraph':
                return `<p>${children}</p>`;
            case 'link':
                return `<a href="${escapeHtml(node.url)}">${children}</a>`;
            default:
                return children;
        }
    })
}
