import {pageStyles} from "./page-styles";

import {backend} from "./start";
import {bridgeCode} from "./bridge";
import {PageCodeStarted} from "./page-code-started";
import {connection} from "./backend";
import {routing} from "./routing";
import {starting} from "./starting";

export const tpls = {
    starting: starting,
    module: {
        page: {title: "view/index.tsx", tpl: PageCodeStarted},
        styles: {title: "styles.scss", language: "css", tpl: pageStyles},
    },
    backend: {
        module1: backend.module1,
        module2: backend.module2,
        platforms1: backend.platform1,
        platforms2: backend.platform2,
    },
    routing,
    bridge: connection


}
