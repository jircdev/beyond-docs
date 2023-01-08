import React from "react";
interface IContextValue {
    opened?: (Event) => Promise<void>;
    dismiss?: boolean;
    slide?: string;
    setSlide?: Function;
    texts?: any;
}
const value: IContextValue = {};
export const HeaderContext = React.createContext(value);
export const useHeaderContext = () => React.useContext(HeaderContext);
