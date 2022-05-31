import * as React from 'react';
import {Intro} from "./intro";
import {NextLinks} from "@beyond/docs/components/next-links/code";

export function ProjectsPage() {
    return (
        <>
            <Intro/>
            <NextLinks items={[
                ['Crear un proyecto', '/docs/projects/create'],
                ['Distribuciones', '/docs/projects/distributions'],
                ['project.json', '/docs/projects/json'],
            ]}/>
        </>
    )
}
