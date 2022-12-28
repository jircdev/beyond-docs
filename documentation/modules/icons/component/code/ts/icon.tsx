import * as React from 'react';
import {BeyondIcon, BeyondIconButton} from "@beyond/ui/icons";
import {ICONS} from "./icons";

export /*bundle*/ const AppIcon = (props: any) => {
    return (
        <BeyondIcon {...props} icons={ICONS}/>
    )
}

export /*bundle*/ function AppIconButton(props: any) {
    return (
        <BeyondIconButton {...props} icons={ICONS}/>
    )
}
