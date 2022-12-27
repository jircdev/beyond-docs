import * as React from "react";

interface IDocsContextValue {
    ready?: boolean;
    texts?: Object;
}

const value: IDocsContextValue = {};

export const DocsContext = React.createContext(value);
export const useDocsContext = () => React.useContext(DocsContext);
