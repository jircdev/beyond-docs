import {structureItems} from "./structure-item";

export const fundamentals = {
    id: 'fundamentals',
    label: 'Fundamentos',
    children: structureItems([
        ['ssr', 'Server side rendering'],
        ['hmr', 'HMR'],
        ["processors", "Procesadores"],
        ['bee', 'BEE'],
        ['dev-server', "Servidor de desarrollo"],
        ['multilanguage', 'Multilenguaje'],
        ['glossary', 'Glosario']
    ]);
};
