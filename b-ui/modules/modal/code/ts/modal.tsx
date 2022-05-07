import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Children} from "./children";

interface IProps {
    show?: boolean,
    onClose?: () => Promise<boolean>,
    className?: string,
    children?: any
}

interface IState {
    closeClicked?: boolean,
    show?: boolean,
    hideClicked?: boolean,
    container?: any
    children?: any
}

export /*bundle*/ function BeyondModal(props: IProps) {

    const [state, setState] = React.useState<IState>({show: props?.show});
    const modal = React.useRef(null);
    const body = document.getElementsByTagName('body')[0];

    const close = async event => {
        if (event) event.stopPropagation();
        const {onClose} = props;
        const body = document.querySelector('body');
        modal.current.classList.add('modal-hidden');
        window.setTimeout(async () => {
            if (typeof onClose === 'function' && !await onClose()) return;
            setState({show: false, closeClicked: true});
            body.setAttribute('style', '');
            body.classList.remove('body-custom-modal-opened');
        }, 300);

    }
    const onClickBackdrop = event => {
        event.stopPropagation();
        if (event.target !== modal.current) return;
        close(event);
    }
    React.useEffect(() => {
        const container = document.createElement('div');
        setState(state => ({...state, container}));
        body.appendChild(container);
        return () => {
            body.removeChild(container);
        }
    }, []);

    const {container} = state;

    if (!container) return null;
    const show = state.show && !state.hideClicked;

    let cls = 'beyond-element-modal '
    cls += (props.className) ? props.className : '';

    if (show) cls += ' show-modal';
    const output = [];
    if (show) {
        output.push(
            <div key="modal-content-wrapper" className="modal-wrapper">
                <div className="modal-content" onClick={event => {
                    event.stopPropagation();
                }}>
                    <Children {...props} close={close} key="children-content"/>
                </div>
            </div>
        );
    }

    return ReactDOM.createPortal(
        <div ref={modal} onClick={onClickBackdrop} className={cls}>{output}</div>,
        container
    );

}
