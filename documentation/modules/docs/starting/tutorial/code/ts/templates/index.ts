import {pageStyles} from "./page-styles";

import {backend} from "./start";
import {bridgeCode} from "./bridge";
import {PageCodeStarted} from "./page-code-started";
import {connection} from "./backend";

export const tpls = {
    module: {
        page: {title: "page.tsx", tpl: PageCodeStarted},
        styles: {title: "styles.scss", language: "css", tpl: pageStyles},
    },
    backend: {
        module1: backend.module1,
        module2: backend.module2,
        platforms1: backend.platform1,
        platforms2: backend.platform2,
    },

    bridge: connection


}