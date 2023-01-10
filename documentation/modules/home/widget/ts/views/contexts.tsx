import * as React from "react";

interface IContextValue {
    opened?: (Event) => Promise[void];
    dismiss?: boolean;
    slide?: string;
    setSlide?: Function;
}

interface IHomeContextValue {
    texts?: Object;
    ready: boolean;
}

const value: IContextValue = {};
export const HeaderContext = React.createContext(value);
export const useHeaderContext = () => React.useContext(HeaderContext);

const homeValue: IHomeContextValue = { ready: false };
export const HomeContext = React.createContext<IHomeContextValue>(homeValue);
export const useHomeContext = () => React.useContext(HomeContext);
