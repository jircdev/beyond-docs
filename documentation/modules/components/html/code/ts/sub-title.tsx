import * as React from "react";

interface Props {
    children?: string | number;
    text?: string;
}

export /*bundle*/ function Subtitle({ children, text }: Props) {
    const title = children ?? text;
    return <h2 className="sub__title">{title}</h2>;
}
