import * as React from "react";
import { BeyondIcon } from "@beyond/ui/icons";

interface Props {
    name: string;
    icon: { viewBox: string; icon: string };
}

export function Icon({ name, icon }: Props) {
    return (
        <li>
            <div className="icon">
                <BeyondIcon icon={icon} />
                <span>{name}</span>
            </div>
        </li>
    );
}
