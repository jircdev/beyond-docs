import * as React from "react";
import { routing } from "@beyond-js/kernel/routing";
import { SyntheticEvent, ReactNode, ButtonHTMLAttributes } from "react";
import { BeyondIcon } from "@beyond/ui/icons";


type props = {
    className?: ButtonHTMLAttributes<HTMLButtonElement>["className"];
    data?: Array<any>;
    label?: ReactNode;
    children?: ReactNode;
    navigate?: string;
    disabled?: ButtonHTMLAttributes<HTMLButtonElement>["disabled"];
    onClick?: (e: SyntheticEvent<HTMLButtonElement, Event>) => void;
    title?: string;
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    icon?: string;
    htmlFor?: string;
};

export /*bundle*/
function BeyondButton(props: props): JSX.Element {
    const { className, onClick, data, label, children, icon } = props;

    const onClickButton = (event: SyntheticEvent<HTMLButtonElement, Event>): void => {
        if (onClick && typeof onClick === "function") {
            onClick(event);
            return;
        }
        if (props.navigate) routing.pushState(`${props.navigate}`);
    };

    props.title ? (props["data-tippy-content"] = props.title) : null;
    const ref = React.useRef(null);
    
    const properties: props = {
        ...props,
        className: !!className ? `${className} beyond-button` : "beyond-button",
        type: !!props.type ? props.type : "button",
    };

    if (data) {
        let properties: string[] = Object.keys(data);
        properties.map((entry: string) => (props[`data-${entry}`] = data[entry]));
    }

    delete properties.label;
    delete properties.icon;
    delete properties.children;
    return (
        <button ref={ref} className={className} {...properties} onClick={onClickButton}>
            {icon && <BeyondIcon icon={icon} />}
            {label}
            {children}
        </button>
    );
}
