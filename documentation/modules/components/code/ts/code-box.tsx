import * as React from "react";
import { Code } from "./code";

export /*bundle*/ function CodeBox({ title, language, children }) {
    return (
        <div className="code__box">
            <header>
                <div className="tab active">{title}</div>
            </header>
            <section className="box__code">
                <Code language={language}>{children}</Code>
            </section>
        </div>
    );
}
