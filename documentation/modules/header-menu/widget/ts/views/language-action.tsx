import * as React from 'react';
import {AppIcon} from "@beyond/docs/ui/icons";
import {LanguagesModal} from "./modal";

export function LanguageAction() {
    const [toggle, setToggle] = React.useState(false);
    const onClick = event => {
        event.preventDefault();
        setToggle(!toggle);
    }

    return (
        <>
            <AppIcon className="btn-header-menu language-icon" icon="languages" onClick={onClick}/>
            {toggle && <LanguagesModal onClose={() => setToggle(false)}/>}
        </>
    )
}
