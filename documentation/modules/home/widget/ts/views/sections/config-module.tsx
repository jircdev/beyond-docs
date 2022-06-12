import * as React from 'react';
import {CodeBox} from "../navigator-box";
import {Link} from '@beyond/ui/link/code';
import {useHomeContext} from "../context";


const tpl = `
{
  "name": "button-component",
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

export function ConfigModule() {

    const {texts: {config, plugAndPlay, readMore}} = useHomeContext();
    return (
        <section className="block__features two-columns gradient-one code-box-container">
            <div className="content">
                <h3 className="text-plg">{config.title}</h3>
                <p>{config.texts}</p>
                <h3 className="text-slg">{plugAndPlay.title}</h3>
                <p>{plugAndPlay.texts}
                </p>
                <footer className="action">
                    <Link className="link-more" href="/docs/modules/introduction">{readMore}</Link>
                </footer>
            </div>
            <CodeBox title="module.json">
                {tpl}
            </CodeBox>
        </section>
    )
}
