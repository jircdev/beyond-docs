import * as React from "react";
import { BeyondModal } from "@beyond/ui/modal";

interface IDisabled {
    disabled?: boolean;
}

export function LanguagesModal({ onClose }) {
    const [selected, setSelected] = React.useState(undefined);
    const onConfirm = (event) => {
        onClose();
    };
    const onClick = (event) => {
        const lang = event.currentTarget.dataset.language;
        setSelected(lang);
    };
    const disabled: IDisabled = {};
    if (!selected) disabled.disabled = true;
    return (
        <>
            <BeyondModal show className="modal-languages" onClose={onClose}>
                <ul className="languages-list">
                    <li onClick={onClick} className={`${selected === "en" ? " item-selected" : ""}`} data-language="en">
                        <span className="current-name">English</span>
                        English
                    </li>
                    <li onClick={onClick} className={`${selected === "es" ? " item-selected" : ""}`} data-language="es">
                        <span className="current-name">Spanish</span>
                        Español
                    </li>
                </ul>
                <div className="actions">
                    <button {...disabled} onClick={onConfirm} className="btn btn-primary ">
                        Confirm
                    </button>
                </div>
            </BeyondModal>
        </>
    );
}
