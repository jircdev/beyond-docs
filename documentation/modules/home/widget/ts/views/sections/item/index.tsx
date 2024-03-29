import React from "react";
import { AppIcon } from "@beyond/docs/ui/icons";
import { SVGImage } from "@beyond/docs/components/html";

interface Props {
    key: string;
    icon: string;
    content: string;
    title: string;
    children?: JSX.Element;
}

export function Item({ icon = "", title = "", content = "", children }: Props) {
    return (
        <li className="feature__item">
            <AppIcon icon={icon} className="app-md-icon" />
            <h4>{title}</h4>
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
            {children}
        </li>
    );
}
