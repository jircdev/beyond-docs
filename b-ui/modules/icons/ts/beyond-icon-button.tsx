import * as React from "react";
import {routing} from "@beyond-js/kernel/routing/ts";
import {BeyondIcon} from './icon';

interface props {
    icon: string;
    onClick: (e: React.SyntheticEvent) => void;
    viewBox: string;
    disabled: boolean;
    name: string;
    value: any;
    id: string;
    icons?: any;
    title: string;
    children: React.ReactNode;
    tippy: string | object;
    navigate: string;
    className: string;
    type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],

}

export /*bundle*/
const BeyondIconButton = (props: props): JSX.Element => {

    const refButton: React.MutableRefObject<any> = React.useRef(null);
    const {icon, onClick, viewBox, disabled, name, value, id, title, children} = props;

    React.useEffect(() => {
        if (!props.title) return
        let {tippy} = props;
        if (!tippy) tippy = {};
        //     this.tippy = await beyond.require('tippy');
        if (!refButton?.current) return;
        //     this.tippy(this._button.current, tippy);
    }, []);

    const onClickButton = async (event: React.SyntheticEvent) => {
        let item: any = refButton.current;
        item.classList.add('has-hover');
        window.setTimeout(() => {
            if (item) item.classList.remove('has-hover')
        }, 300);

        if (onClick && typeof onClick === 'function') {
            onClick(event);
            return
        }

        if (props.navigate) {
            routing.pushState(props.navigate);
        }
    };


    let {className, type} = props;
    type = (!!type) ? type : 'button';
    className = className ? `${className} beyond-icon-button` : 'beyond-icon-button';

    interface iconAttributes {
        icon: object | string,
        viewBox?: string,
        icons: object | any
    }

    const icons = props.icons ?? {};
    const iconAttributes: iconAttributes = {'icon': icon, icons};
    if (viewBox) iconAttributes.viewBox = viewBox;

    const attrs: props = Object.assign({}, props);
    title ? attrs['data-tippy-content'] = title : null;

    delete attrs.icon;
    delete attrs.type;
    delete attrs.title;
    delete attrs.viewBox;
    delete attrs.className;
    delete attrs.icons;

    return (
        <button
            id={id}
            type={type}
            {...attrs}
            name={name}
            value={value}
            ref={refButton}
            disabled={disabled}
            className={className}
            onClick={onClickButton}>
            <BeyondIcon {...iconAttributes} />
            {children}
            {/* {!disabled && <BeyondWaves/>} */}
        </button>
    );
};

