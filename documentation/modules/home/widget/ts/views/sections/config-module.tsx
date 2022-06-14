import * as React from 'react';
import {CodeBox} from "@beyond/docs/code/code";
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
        <div className="page-section grid-container container two-columns">
            <div className="flex-center-v">
                <div className="content">
                    <section>
                        <header>
                            <span className="pretitle">
                                {config.pretitle}
                            </span>
                            <h3>{config.title}</h3>
                        </header>

                        <p>{config.texts}</p>
                    </section>

                    <h3>{plugAndPlay.title}</h3>
                    <p>{plugAndPlay.texts}
                    </p>
                    <footer className="action">
                        <Link className="link-more" href="/docs/modules/introduction">{readMore}</Link>
                    </footer>
                </div>
            </div>

            <CodeBox title="module.json">
                {tpl}
            </CodeBox>
        </div>
    )
}
