import {CustomEditor} from "./components/functions";
import * as React from "react";

import {loadImage} from "./actions/load-image";
import {insertLink} from "./actions/add-link";

export function HeaderEditor({editor}) {


    const actions = {
        link: insertLink,
        image: loadImage
    }
    const handler = event => {
        const target = event.currentTarget;
        const url = prompt('URL');
        actions[target.dataset.action](editor, url);
    };

    return (
        <header>
            <button
                onMouseDown={event => {
                    event.preventDefault()
                    CustomEditor.toggleBoldMark(editor)
                }}
            >
                Bold
            </button>
            <button
                onMouseDown={event => {
                    event.preventDefault()
                    CustomEditor.toggleCodeBlock(editor)
                }}
            >
                Code Block
            </button>
            <button data-action="image" onClick={handler}>Image</button>
            <button data-action="link" onClick={handler}>Link</button>
        </header>
    );
}
