import {structureItems} from "./structure-item";

const projects = [
    ["projects/intro", 'Introducción'],
    ["projects/create", 'Crear un proyecto'],
    ["projects/structure", 'Estructura'],
    ["projects/json", 'project.json'],
    ["projects/import", 'Importar un proyecto'],
    ["projects/dependencies", 'Dependencias'],

];
const modules = [
    ['modules/introduction', 'Modulos en Beyond'],
    ['modules/create', 'Crear un módulo'],
    ['modules/json', 'Configuración'],
];

const styles = [
    ["styles/template", "Template"],
    ["styles/modules", "Modulos"],
    ["styles/themes", "Light & Dark theme"],
    ["styles/imports", "Importación"],
];
const widgets = [
    ["widgets", "Intro"],
    ["widgets/definition", "Definición"],
    ["widgets/controller", "Objeto Controller"],
    ["widgets/page", "Page"],
    ["widgets/layout", "Layout"]
];

const general = structureItems([
    ['projects', 'Proyectos', structureItems(projects)],
    ['modules', 'Módulos', structureItems(modules)],
    ['bundles', 'Bundles'],
    ['processors', 'Processors'],
    ['template', 'Sistema de Plantillas'],
    ['widgets', 'Widgets', structureItems(widgets)],
    ['routing', 'Enrutamiento'],
    ['state/management', 'Manejo de Estados'],
    ['backend', 'Backend'],
    ['styles', 'Estilos', structureItems(styles)],

]);
export const basics = {
    id: 'concepts',
    label: 'Conceptos Básicos',
    children: general
};
