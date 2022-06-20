import {PageCode} from "./page-code";
import {bridgeCode} from "./bridge";

const tpl1 = `
import {Auth} from "@testing/login/home/bridge";
`
export const connection = {
    view1: {
        title: 'view.tsx',
        tpl: tpl1
    },
    view2: {
        title: 'view.tsx',
        tpl: PageCode
    },
    bridge: {
        title: "bridge.ts",
        tpl: bridgeCode
    }
}
