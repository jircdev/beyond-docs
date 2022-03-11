export const Menu = [
    {
        id: 'Getting Start',
        label: 'Getting Start',
        children: [
            {
                id: 'what-is-beyond',
                label: '¿Que es beyond?',
                link: '/what-is-beyond'
            },
            {
                id: 'install',
                label: 'Instalación',
                link: '/install'
            },
            {
                id: 'web-tutorial',
                label: "Tutorial",
                link: '/web-tutorial'
            },
            {
                id: 'dashboard',
                label: 'Dashboard',
                link: '/dashboard'
            }
        ]
    },
    {
        id: 'Concepts',
        label: 'Concepts',
        children: [
            {
                id: 'Projects',
                label: 'Projects',
                children: [
                    {
                        id: 'project.json',
                        label: 'project.json',
                        link: '/projects/projectjson'
                    },
                    {
                        id: 'beyond.json',
                        label: 'beyond.json',
                        link: '/projects/beyondjson'
                    },
                ]
            }
        ]
    }
]
