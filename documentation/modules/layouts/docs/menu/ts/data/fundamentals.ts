import {structureItems} from "./structure-item";

export const fundamentals = {
    id: 'fundamentals',
    label: 'Fundamentos',
    children: structureItems([
        ['dev-server', "Servidor de desarrollo"],
        ['foundations/distributions', 'Distribuciones'],

        ['foundations/hmr', 'HMR'],
        ['foundations/bee', 'BEE'],

        // ['multilanguage', 'Multilenguaje'],
        // ['glossary', 'Glosario']
    ])
};
