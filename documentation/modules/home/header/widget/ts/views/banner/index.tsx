import React from "react";
import { Buttons } from "../buttons";
import { AppIcon } from "@beyond/docs/ui/icons";
import { DevAndProd } from "./dev-and-prod";
import { useHeaderContext } from "../contexts";
import { PublishState } from "./publish";

export function Banner() {
    const { slide } = useHeaderContext();
    const Slide = slide === "publish" ? PublishState : DevAndProd;
    return (
        <article className="header__banner container container-section">
            <section>
                <Buttons />
            </section>
            <Slide />
        </article>
    );
}
