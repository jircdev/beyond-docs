import {structureItems} from "./structure-item";

const obj = ([id, label]) => ({id, label});

const tutorial = structureItems([
    'tutorial/start',
    'tutorial/first-module',
    'tutorial/backend',
    'tutorial/bridge',
    'tutorial/routing',
]);
const items = [
    'intro',
    'quick-start',
    ['tutorial', tutorial],
    'dashboard',
]
const children = structureItems(items);
export const starting = {
    id: 'getting-start',
    children
};
