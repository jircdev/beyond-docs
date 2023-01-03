import * as React from "react";

import { Icon } from "./icon";
import { useIconsContext } from "./context";

export function List() {
    const { icons } = useIconsContext();

    const elements = Object.keys(icons).map((name) => {
        return <Icon name={name} key={name} icon={icons[name]} />;
    });

    return <ul className="icon__list">{elements}</ul>;
}
