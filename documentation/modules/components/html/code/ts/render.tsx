import React from "react";
import {useRender} from "./use-render";

interface Ivalue {
    content: object;
}

export /*bundle*/ function Render(props) {

    const {content, tpls, components} = props
    const output = useRender(content, tpls, components);
    return <>{output}</>;
}

