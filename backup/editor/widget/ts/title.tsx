import {Editable, Slate, withReact} from "slate-react";
import * as React from "react";
import {createEditor, Descendant} from "slate";
import {useCallback, useState} from "react";
import {serialize} from "./serialize";

export function TitleEditor() {

    const content = JSON.parse(localStorage.getItem('content')) || [
        {
            type: 'h1',
            children: [{text: ''}],
        },
    ]

    const onChange = newValue => {
        setValue(newValue);
    }
    const initialValue: Descendant[] = content;
    const [value, setValue] = useState<Descendant[]>(initialValue)
    const [editor] = useState(() => withReact(createEditor()))

    const renderLeaf = useCallback(({attributes, children}) => <h1 {...attributes}>{children}</h1>, [])
    return (
        <>
            <Slate editor={editor} value={value} onChange={onChange}>
                <Editable
                    renderLeaf={renderLeaf}
                    className="beyond-title-editor"/>
            </Slate>
        </>
    )
}
