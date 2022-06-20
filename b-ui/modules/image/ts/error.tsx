import * as React from 'react';
import {BeyondIconButton} from '@beyond/ui/icons/code';

interface IProps {
    properties: any,
    src?: string;
    alt?: string;
    graphSrc?: string;
    size?: string;
    className?: string;
    onClick?: (e: React.SyntheticEvent) => void;
    children?: React.ReactNode;
    loading?: "eager" | "lazy";
    viewBox?: any,
    disabled?: any,
    name?: any,
    value?: any,
    onError?: (e: React.SyntheticEvent) => void;
};

export function ErrorImage({onError, properties, src}: IProps) {
    const onClickError = (event: React.SyntheticEvent) => {
        event.stopPropagation();
        onError(event);
    }
    return (
        <figure data-src={src} {...properties}>
            <div key="error" data-src={src} className="content-error">
                <span>Fallo la carga de la imagen</span>
            </div>
        </figure>
    );
}
