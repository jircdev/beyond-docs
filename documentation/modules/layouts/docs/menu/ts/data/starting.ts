const obj = ([id, label]) => ({id, label});

const items = [
    ['intro', 'Introducción'],
    ['quick-start', 'Inicio rápido'],
    ['install', 'Instalación'],
    ['tutorial/web', 'Tutorial'],
    ['dashboard', 'Dashboard'],
]
const children = items.map(obj);
export const starting = {
    id: 'getting-start',
    label: 'Empezando',
    children
};
