import {ReactEditor} from "slate-react";
import {Editor, Path, Range, Transforms} from "slate";

export const createParagraphNode = (children: any[] = [{text: ""}]) => ({
    type: "paragraph",
    children
});

export const createLinkNode = (href, text) => ({
    type: "link",
    href,
    children: [{text}]
});
export const removeLink = (editor, opts = {}) => {
    Transforms.unwrapNodes(editor, {
        ...opts,
        match: (n) =>
            !Editor.isEditor(n) && Element.isElement(n) && n.type === "link"
    });
};

export function insertLink(editor, url) {
    if (!url) return;
    const {selection} = editor;
    const link = createLinkNode(url, 'new link');
    ReactEditor.focus(editor);

    if (!selection) {
        Transforms.insertNodes(editor, createParagraphNode([link]));
        return;
    }

    const [parentNode, parentPath] = Editor.parent(editor, selection.focus?.path);
    if (parentNode.type === "link") {
        removeLink(editor);
    }

    if (editor.isVoid(parentNode)) {
        // Insert the new link after the void node
        Transforms.insertNodes(editor, createParagraphNode([link]), {
            at: Path.next(parentPath),
            select: true
        });
        return;
    }
    if (Range.isCollapsed(selection)) {
        // Insert the new link in our last known locatio
        return Transforms.insertNodes(editor, link, {select: true});
    }
    // Wrap the currently selected range of text into a Link
    Transforms.wrapNodes(editor, link, {split: true});
    Transforms.collapse(editor, {edge: "end"});

}
