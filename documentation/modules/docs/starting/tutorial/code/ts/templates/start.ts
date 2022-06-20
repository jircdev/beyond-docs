const ts = `
import {listen} from '@beyond-js/backend/listen/ts';

listen();
`
const tpl1 = `
{
  "bundle": "start",
  "platforms": "backend",
  "ts": {
    "files": "*"
  }
}`;
const tpl2 = `
  "platforms": [
    "backend",
    "web"
  ],
  "bridge": {
    "path": "bridge",
    "files": [
      "*"
    ]
  },
   "widget": ...    
    `;

const tpl3 = `
{
  "name": "home",
  "platforms": [
    "backend",
    "web"
  ],
  "bridge": {
    "path": "bridge",
    "files": [
      "*"
    ]
  },
  "widget": {
    "is": "page",
    "route": "/",
    "element": {
      "name": "home-page"
    },
    "scss": {
      "path": "scss",
      "files": [
        "*"
      ]
    },
    "ts": {
      "path": "ts",
      "files": [
        "*"
      ]
    }
  }
}`;
export const backend = {
    module1: {
        title: "module.json",
        "language": "json",
        'tpl': tpl1
    },
    module2: {
        title: "start.ts",
        tpl: ts,
    },
    platform1: {
        tpl: tpl2,
    },
    platform2: {tpl: tpl3, title: "module.json", language: "json"}

}
