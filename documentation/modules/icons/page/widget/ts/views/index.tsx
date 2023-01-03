import * as React from "react";
import { Header } from "./header";
import { List } from "./list";
import { IconsPageContext } from "./context";

import { ICONS } from "@beyond/docs/ui/icons";

export /*bundle*/
function View() {
    const [icons, setIcons] = React.useState(ICONS);

    const contextValue = {
        icons,
        setIcons,
    };
    return (
        <IconsPageContext.Provider value={contextValue}>
            <main className="icons__page">
                <Header />
                <List />
            </main>
        </IconsPageContext.Provider>
    );
}
