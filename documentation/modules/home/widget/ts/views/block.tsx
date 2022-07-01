import * as React from 'react';
import {CodeBox} from "@beyond/docs/code";

const tpl = `
{
  "name": "code",
  "code": {
    "sass": {
      "path": "sass",
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

`;

export function Block() {
    return (
        <section className="block__features two-columns gradient-one">
            <div className="conteint">

            </div>
            <CodeBox title="module.json">
                {tpl}
            </CodeBox>

        </section>
    )
}
