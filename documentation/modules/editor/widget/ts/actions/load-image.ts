import {ReactEditor} from "slate-react";
import {Editor, Node, Path, Transforms} from "slate";

const createImageNode = (alt, src) => ({
    type: "img",
    alt,
    src,
    children: [{text: ""}]
});

export function loadImage(editor, url) {
    const {selection} = editor;

    const image = createImageNode("Image", url);

    ReactEditor.focus(editor);

    if (!!selection) {
        const [parentNode, parentPath] = Editor.parent(
            editor,
            selection.focus?.path
        );

        if (editor.isVoid(parentNode) || Node.string(parentNode).length) {
            // Insert the new image node after the void node or a node with content
            Transforms.insertNodes(editor, image, {
                at: Path.next(parentPath),
                select: true
            });
        } else {
            // If the node is empty, replace it instead
            Transforms.removeNodes(editor, {at: parentPath});
            Transforms.insertNodes(editor, image, {at: parentPath, select: true});
        }
    } else {
        // Insert the new image node at the bottom of the Editor when selection
        // is falsey
        Transforms.insertNodes(editor, image, {select: true});
    }
}
