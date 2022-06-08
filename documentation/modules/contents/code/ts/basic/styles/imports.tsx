import * as React from 'react';
import {StylesNodeModules} from "./node-modules";
import {StylesImportBundle} from "./import-bundle";

export function StylesImports() {
    return (
        <>
            <h1>Importación de archivos de estilo</h1>
            <StylesNodeModules/>
            <StylesImportBundle/>
        </>
    )
}
