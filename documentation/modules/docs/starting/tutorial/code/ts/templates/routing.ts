const tpl1 = `
import {routing} from "@beyond-js/kernel/routing";`
const tpl2 = `
routing.pushState('/welcome');`;
export const routing = {
    importing: {tpl: tpl1},
    pushState: {tpl: tpl2, title: 'view.tsx'}
}
