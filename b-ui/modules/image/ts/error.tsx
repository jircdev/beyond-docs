import * as React from 'react';
import {BeyondIconButton} from '@beyond/ui/icons/code';

interface IProps {
    onError: any,
    src: string,
    properties: any
};

export function ErrorImage({onError, properties, src}: IProps) {
    const onClickError = (event: React.SyntheticEvent) => {
        event.stopPropagation();
        onError(event);
    }
    return (
        <figure data-src={src} {...properties}>
            <div key="error" data-src={src} className="content-error">
                <BeyondIconButton onClick={onClickError} icon="refresh"/>
                <span>Fallo la carga de la imagen</span>
            </div>
        </figure>
    );
}
