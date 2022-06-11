import {structureItems} from "./structure-item";

export const fundamentals = {
    id: 'fundamentals',
    label: 'Fundamentos',
    children: structureItems([
        ['dev-server', "Servidor de desarrollo"],
        ['distributions', 'Distribuciones'],
        ["processors", "Procesadores"],
        ['hmr', 'HMR'],
        ['bee', 'BEE'],
        ['ssr', 'SSR'],
        ['multilanguage', 'Multilenguaje'],
        ['glossary', 'Glosario']
    ])
};
