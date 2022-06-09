import * as React from 'react';
import {Code} from "@beyond/docs/code/code";
import {Link} from '@beyond/ui/link/code';
import {variablesTPL} from "../styles/tpl/variables";
import {TemplateIntro} from "./intro";
import {TemplateConfig} from "./config";
import {TemplateApplication} from "./application";
import {TemplateGlobal} from "./global";
import {TemplateOverwrites} from "./overwrites";

const tplConfig = `
"application": {
    "processor": "sass",
    "path": "application",
    "files": [
      "*"
    ]
  }
`;

export function TemplatePage() {
    return (
        <>
        <TemplateIntro/>
        <TemplateConfig/>
        <TemplateApplication/>
        <TemplateGlobal/>
        <TemplateOverwrites/>


        </>
    )
}
