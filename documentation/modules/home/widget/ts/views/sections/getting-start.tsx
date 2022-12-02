import * as React from "react";
import { AppIcon } from "@beyond/docs/ui/icons";
import { useHomeContext } from "../context";

export function GettingStart() {
    return (
        <div className="container">
            <div className="container--800">
                <h3>Getting Started</h3>
                <p>Puedes instalar BeyondJS con dos scripts desde tu terminal</p>
                <div className="clipboard__container" data-text="npm i -g beyond">
                    <span>npm i --location=global beyond</span>
                    <AppIcon icon="copy" />
                </div>
                <p>O creando un proyecto de forma directa</p>
                <div className="clipboard__container" data-text="npm i -g beyond">
                    npx @beyond-js/create-project --type node --name @beyond-tutorial/hmr
                </div>
            </div>
        </div>
    );
}
