import * as React from 'react';
import {BeyondImage} from '@beyond/ui/image/code';
import {BeyondModal} from '@beyond/ui/modal/code';

export function ModalImage({src, alt}) {
    const [open, toggle] = React.useState(false)

    return (
        <>
            <BeyondImage alt={alt} src={src} onClick={() => {
                toggle(!open);
            }}/>
            {
                open &&
                <BeyondModal className="image__modal" show>
                    <BeyondImage alt={alt} src={src}/>
                </BeyondModal>
            }
        </>

    )
}
