import * as React from 'react';
import {AppIconButton} from "@beyond/docs/ui/icons";

export function Quiz({id}) {
    return (
        <div className="content__quiz">
            <h4>¿Te resultó útil este artículo?</h4>
            <div className="quiz__actions">

                <AppIconButton icon="beyond" className="border-icon"/>
                <AppIconButton icon="beyond" className="border-icon to-bottom"/></div>

        </div>

    )
}
