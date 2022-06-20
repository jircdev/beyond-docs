import React from "react";
import {useRender} from "./use-render";

interface Ivalue {
    content: object;
}

export /*bundle*/ function Render({content, tpls}) {
    const output = useRender(content, tpls);
    return <>{output}</>;
}

