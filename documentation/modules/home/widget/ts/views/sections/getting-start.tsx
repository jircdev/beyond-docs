import * as React from "react";
import { AppIcon } from "@beyond/docs/ui/icons";
import { BeyondIconButton } from "@beyond/ui/icons";
import { useHomeContext } from "../contexts";
import { SVGS } from "../../icons";
import { Clipboard } from "../clipboard";
export function GettingStart() {
    const {
        texts: { copyMessage, gettingStarted: texts },
    } = useHomeContext();

    return (
        <section className="container page-section">
            <div className="flex-container getting_started__section ">
                <section>
                    <h4 className="no-m primary-color">{texts.ready}</h4>
                    <p className="pre__title">{texts.description}</p>
                </section>
                <div>
                    <BeyondIconButton className="start-now" icon={SVGS.rightArrow}>
                        {texts.links.startNow}
                    </BeyondIconButton>
                    <a href="#">{texts.links.why}</a>
                </div>

                <div>
                    <Clipboard text="npm i --location=global beyond" message={copyMessage} />
                    <a href="#">{texts.links.github}</a>
                </div>
            </div>
        </section>
    );
}
