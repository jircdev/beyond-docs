import * as React from "react";

export interface IValue {
    selected?: any;
    setSelected?: any;
    container?: HTMLElement;
}

const defaultValue: IValue = {}
export const MenuContext = React.createContext(defaultValue);
export const useMenuContext = () => React.useContext(MenuContext);
