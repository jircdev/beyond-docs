import {CodeBlock} from "../components/code-block";
import {Image} from "../components/image";
import {DefaultElement} from "../components/default";
import * as React from "react";
import {Leaf} from "../components/leaf";
import {Link} from "../components/link";

export function onRenderElement(props) {

    console.log(400, props.element.type)
    switch (props.element.type) {
        case 'code':
            return <CodeBlock {...props} />
        case 'img':
            return <Image {...props}/>
        case 'link':
            return <Link {...props}/>
        default:
            return <DefaultElement {...props} />
    }


}

export const onReanderLeaf = props => <Leaf {...props} />;
