export const Menu = [
    {
        id: 'getting-start',
        label: 'Empezando',
        children: [
            {
                id: 'intro',
                label: 'Introducción',
            },
            {
                id: 'install',
                label: 'Instalación',
            },
            {
                id: 'tutorial/web',
                label: "Tutorial",
            },
            {
                id: 'dashboard',
                label: 'Dashboard',
            }
        ]
    },
    {
        id: 'concepts',
        label: 'Conceptos Básicos',
        children: [
            {
                id: 'projects',
                label: 'Projectos',
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
                        id: "widgets/creation",
                        label: "Creando un widget"
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
                id: 'state-management',
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
    },
    {
        id: 'fundamentals',
        label: 'Fundamentos',
        children: [
            {
                id: 'why-beyond',
                label: '¿Porque Beyond?',
            },
            {
                id: 'npm-packages',
                label: 'Paquetes Npm',
            },
            {
                id: 'hmr',
                label: 'HMR',
            },
            {
                id: "processors",
                label: "Procesadores"
            },
            {
                id: 'bee',
                label: 'BEE',
            },

        ]
    },
    {
        id: 'configuration',
        label: 'Configuracion',
        children: [
            {
                id: 'template',
                label: 'Plantilla'
            },
        ]
    },
    {
        id: 'reference',
        label: 'API',
        children: [
            {
                id: 'server',
                label: 'Server',
            },
            {
                id: '/api/uri',
                label: 'URI'
            },
            {
                id: 'projects',
                label: 'Configuración de proyectos',

            },
            {
                id: 'modules',
                label: 'Modules',
            },
            {
                id: 'bundles',
                label: 'Bundles',
            },
            {
                id: 'processors',
                label: 'Processors',
            },
        ]
    }
]
