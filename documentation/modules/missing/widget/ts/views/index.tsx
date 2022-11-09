import * as React from 'react';
import {useTexts, DocsContext} from "@beyond/docs/store";
import {module} from "beyond_context";
import {Link} from "@beyond/ui/link";
import {BeyondIsotype} from "@beyond/docs/preload";

export function View() {

    const [ready, texts] = useTexts(module.specifier);
    if (!ready) return null;
    return (
        <div className="container-404">
            <div className="content-container two-columns">
                <header>
                    <span className="pretitle-h1">{texts.pretitle}</span>
                    <h1>{texts.title}</h1>
                    <p>{texts.description}</p>
                    <p>{texts.end.s1} <Link href="/" className="link primary">{texts.end.l1}</Link> {texts.end.s2}</p>
                </header>
                <div className="isotype-404 ">

                    <span>4</span>
                    <BeyondIsotype/>
                    <span>4</span>
                </div>
            </div>

        </div>
    )
}
