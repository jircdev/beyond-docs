import * as React from "react";
import { BeyondLogo } from "@beyond/docs/components/html";
import { BeyondImage } from "@beyond/ui/image";
export function Footer() {
    return (
        <footer className="page__footer flex-container flex-center container">
            <BeyondImage
                src="/images/beyond-logo.png"
                alt="BeyondJS Universal javascript framework"
                className="app__logo"
            />
            ©Copyright BeyondJS 2023 · Buenos Aires, Argentina · Mail: support@beyondjs.com . +54 9 11 5317 1534
        </footer>
    );
}
