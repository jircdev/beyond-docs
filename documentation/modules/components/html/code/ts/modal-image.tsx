import * as React from 'react';
import {BeyondImage} from '@beyond/ui/image';
import {BeyondModal} from '@beyond/ui/modal';

export /*bundle*/function ModalImage({src, alt, className}) {
    const [open, toggle] = React.useState(false)
    const cls = `image__modal ${className ? ` ${className}` : ''}`;
    return (
        <>
            <BeyondImage alt={alt} src={src} onClick={() => toggle(!open)}/>
            {
                open &&
                <BeyondModal className={cls} show>
                    <BeyondImage alt={alt} src={src}/>
                </BeyondModal>
            }
        </>

    )
}
