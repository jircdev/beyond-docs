import React from "react";
import { useHomeContext } from "../contexts";

export function CodePen() {
    const {
        texts: { codepen: texts },
    } = useHomeContext();

    return (
        <section className="container page-section codepen__section center-content">
            <header>
                <span className="pretitle">{texts.preTitle}</span>
                <h3 dangerouslySetInnerHTML={{ __html: texts.title }}></h3>
                <span className="h4">{texts.subTitle}</span>

                <p>{texts.description}</p>

                <p className="check__paragraph">{texts.checkItOut}</p>
            </header>

            <div className="codepen__iframe">
                <iframe
                    style={{ width: "100%", height: "100%" }}
                    scrolling="no"
                    title="BeyondJS react counter widget"
                    src="https://codepen.io/hello-beyond/embed/xxzrORV?default-tab=html%2Cresult"
                    frameBorder="no"
                    loading="lazy"
                    allowtransparency="true"
                    allowFullScreen={true}
                >
                    See the Pen <a href="https://codepen.io/hello-beyond/pen/xxzrORV">BeyondJS react counter widget</a>{" "}
                    by hello-beyond (<a href="https://codepen.io/hello-beyond">@hello-beyond</a>) on{" "}
                    <a href="https://codepen.io">CodePen</a>.
                </iframe>
            </div>
        </section>
    );
}
