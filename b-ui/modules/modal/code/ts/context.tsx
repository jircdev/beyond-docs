import * as React from 'react';

interface IContextValue {
    close?: () => boolean | void,
    dismiss?: boolean
}

const value: IContextValue = {}
export const BeyondModalContext = React.createContext(value);
export const useBeyondModalContext = () => React.useContext(BeyondModalContext);
