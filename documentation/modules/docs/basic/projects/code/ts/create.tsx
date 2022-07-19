import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";

const tpls = {
    beyond: {language: 'shell', tpl: 'beyond'},
    tpl1: {
        language: 'json', tpl: `
{
  "name": "project-name",
  "version": "1.0.0",
  "title": "Project title",
  "description": "Description"
  "languages": {
    "default": "en",
    "supported": [
      "en"
    ]
  },,
  "modules": {
    "path": "modules"
  }
}
`
    },
    tpl2: {language: 'json', tpl: '' + `

{
  "applications": [
    "path-to-project/project.json"
  ]
}

`}
}

export /*bundle*/ function ProjectCreate() {

    const attrs = {moduleId: module.resource, tpls};
    return (
        <>
            <Document {...attrs} textId="create"/>
            <Document {...attrs} textId="dashboard"/>
            <Document {...attrs} textId="createInfo"/>
            <Document
                {...attrs} textId="manual"

                nextLinks={["/docs/projects/structure", "/docs/projects/json"]}
            />
        </>
    );
}
