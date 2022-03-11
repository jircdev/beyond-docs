import * as React from 'react';
import {BeyondIcon, BeyondIconButton} from "@beyond/ui/icons/code";
import {ICONS} from "./control";

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
