import * as React from 'react';
import {Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";

const tpl =
    `\rimport {ReactWidgetController} from '@beyond-js/react-widgets/base';


import {Page} from './views/page';
export /*bundle*/
class Controller extends ReactWidgetController {
    get Widget() {
        return Page;
    }
}`
const tpls = {
    tpl: {title: "controller.ts", tpl}
}

export /*bundle*/ function WidgetController() {
    return (
        <>
            <Document
                tpls={tpls}
                moduleId={module.resource}
                textId="controller" nextLinks={["/docs/widgets/definition"]}/>
        </>
    )
}
