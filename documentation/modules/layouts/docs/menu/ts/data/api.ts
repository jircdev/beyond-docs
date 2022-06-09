import {structureItems} from "./structure-item";

const children = [
    ['server', 'Server'],
    ['/api/uri', 'URI'],
    ["/api/BeyondWidget", "Objeto widget"],
    ['projects', 'Configuración de proyectos'],
    ['modules', 'Modules'],
    ['bundles', 'Bundles'],

];
export const api = {
    id: 'reference',
    label: 'API',
    children: structureItems(children)
};
