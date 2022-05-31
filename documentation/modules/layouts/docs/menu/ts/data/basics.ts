import {structureItems} from "./structure-item";

const projects = [
    ["projects/intro", 'Introducción'],
    ["projects/create", 'Crear un proyecto'],
    ["projects/json", 'project.json'],
    ["projects/import", 'Importar un proyecto'],

]
export const basics = {
    id: 'concepts',
    label: 'Conceptos Básicos',
    children: [
        {
            id: 'projects',
            label: 'Proyectos',
            children: structureItems(projects)
        },
        {

            label: 'Módulos',
            children: [
                {
                    id: 'modules/introduction',
                    label: 'Modulos en Beyond',
                },
                {
                    id: 'modules/config',
                    label: 'Configuración',
                }
            ]
        },
        {
            id: 'bundles',
            label: 'Bundles',
        },
        {
            id: 'widgets',
            label: 'Widgets',
            children: [
                {
                    id: "widgets",
                    label: "Intro"
                },
                {
                    id: "widgets/definition",
                    label: "Definición"
                },
                {
                    id: "widgets/controller",
                    label: "Objeto Controller"
                },
                {
                    id: "widgets/page",
                    label: "Page"
                },
                {
                    id: "widgets/layout",
                    label: "Layout"
                }
            ]
        },
        {
            id: 'routing',
            label: 'Enrutamiento',
        },
        {
            id: 'state/management',
            label: 'Manejo de Estados',
        },
        {
            id: 'styles',
            label: 'Estilos'
        },
        {
            id: 'themes',
            label: 'Light & Dark Theme'
        },
        {
            id: 'backend',
            label: 'Backend'
        },
        {
            id: 'ssr',
            label: 'Server side rendering'
        },
    ]
};
