import * as React from 'react';

interface IContextValue {
    opened?: (Event) => Promise<void>,
    dismiss?: boolean
}

const value: IContextValue = {}
export const HeaderContext = React.createContext(value);
export const useHeaderContext = () => React.useContext(HeaderContext);
