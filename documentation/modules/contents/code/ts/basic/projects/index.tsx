import * as React from 'react';

import {ProjectJson} from "./project-json";
import {Intro} from "./intro";

export function ProjectsPage() {
    return (
        <>
            <Intro/>
            <ProjectJson/>
        </>
    )
}
