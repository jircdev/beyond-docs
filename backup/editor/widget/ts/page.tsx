import {useState, useCallback} from "react";
import {serialize} from "./utils/serialize";
import {createEditor} from 'slate';
import {Leaf} from "./components/leaf";
import {isHotkey} from './utils/hotkeys'
// Import the Slate components and React plugin.
import {Slate, Editable, withReact} from 'slate-react';
// TypeScript users only add this code
import {Text, BaseEditor, Editor, Descendant, Transforms} from 'slate'
import {ReactEditor} from 'slate-react';
import * as React from "react";
import {CodeBlock} from "./components/code-block";
import {DefaultElement} from "./components/default";
import {CustomEditor} from "./components/functions";
import {HeaderEditor} from "./header";
import {TitleEditor} from "./title";
import {Image} from "./components/image";
import {onReanderLeaf, onRenderElement, renderElement} from "./utils/render";

type CustomElement = { type: 'paragraph'; children: [{ text: '' }] }
type CustomText = { text: string }

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor
        Element: CustomElement
        Text: CustomText
    }
}

export /*bundle*/
function Widget(props) {

    const content = JSON.parse(localStorage.getItem('content')) || [
        {
            type: 'paragraph',
            children: [{text: 'A line of text in a paragraph.'}],
        },
    ]
    const initialValue: Descendant[] = content;
    const [value, setValue] = useState<Descendant[]>(initialValue)
    const [editor] = useState(() => withReact(createEditor()))

    const onChange = newValue => {
        const isAstChange = editor.operations.some(
            op => {
                return 'set_selection' !== op.type
            }
        )
        if (isAstChange) {
            // Save the value to Local Storage.
            console.log(serialize(value));
            const content = JSON.stringify(value)
            localStorage.setItem('__content', content)
        }

        setValue(newValue);
    }

    const HOTKEYS = {
        'mod+b': 'bold',
        'mod+i': 'italic',
        'mod+u': 'underline',
        'mod+`': 'code',
        'mod+shift': 'inlineCode',
    }


    const isMarkActive = (editor, format) => {
        const marks = Editor.marks(editor)
        return marks ? marks[format] === true : false
    }

    const toggleMark = (editor, format) => {
        const isActive = isMarkActive(editor, format)
        if (isActive) Editor.removeMark(editor, format)
        else Editor.addMark(editor, format, true)
    }

    const onKeyDown = event => {
        if (!event.ctrlKey) {
            return
        }
        for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event as any)) {
                event.preventDefault()
                const mark = HOTKEYS[hotkey]
                toggleMark(editor, mark)
            }
        }
    }

    const renderElement = useCallback(onRenderElement, [])
    // Define a leaf rendering function that is memoized with `useCallback`.
    const renderLeaf = useCallback(onReanderLeaf, [])

    return (
        <div className="page-container">
            <TitleEditor/>
            <HeaderEditor editor={editor}/>
            <Slate editor={editor} value={value} onChange={onChange}>
                <Editable
                    renderLeaf={renderLeaf}
                    renderElement={renderElement}
                    onKeyDown={onKeyDown} className="beyond-editor"/>
            </Slate>
        </div>

    )
}
