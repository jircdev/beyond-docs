import {structureItems} from "./structure-item";

const obj = ([id, label]) => ({id, label});

const tutorial = structureItems([
    ['tutorial/start', 'Empezando'],
    ['tutorial/first-module', 'Creando un módulo'],
    ['tutorial/backend', 'Código Backend'],
    ['tutorial/bridge', 'Bridge'],
    ['tutorial/routing', 'Enrutamiento'],
]);
const items = [
    ['intro', 'Introducción'],
    ['quick-start', 'Inicio rápido'],
    ['tutorial', 'Tutorial', tutorial],
    ['dashboard', 'Dashboard'],
]
const children = structureItems(items);
export const starting = {
    id: 'getting-start',
    label: 'Empezando',
    children
};
