export const moduleJson = {
    bridge: `  "platforms": [
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
    `,
    module: `{
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
}
`
}
