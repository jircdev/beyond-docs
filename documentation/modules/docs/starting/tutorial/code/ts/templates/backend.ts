import {PageCode} from "./page-code";
import {bridgeCode} from "./bridge";

const tpl1 = `
import {Auth} from "@testing/login/home/bridge";
`
export const connection = {
    view1: {
        title: 'home/views/index.tsx',
        tpl: tpl1
    },
    view2: {
        title: 'home/views/index.tsx',
        tpl: PageCode
    },
    bridge: {
        title: "bridge.ts",
        tpl: bridgeCode
    }
}
