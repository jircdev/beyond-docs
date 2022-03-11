import * as React from 'react';
import * as PerfectScrollbar from 'perfect-scrollbar';

export /*bundle*/
function PerfectScroll({className, children, onScrollY, onScrollX, config = {}}) {
    const {useEffect, useRef, useState} = React;
    const ref = useRef(null);
    const [scrollbar, setScrollbar] = useState<any>();
    const listenScrollY = event => {
        if (!onScrollY) return;
        onScrollY(event, ref.current, scrollbar)
    };
    const listenScrollX = event => {
        if (!onScrollX) return;
        onScrollX(event, ref.current, scrollbar);
    };
    useEffect(() => {
        const control = ref.current;
        const instance = new PerfectScrollbar(control, {
            wheelSpeed: 2,
            wheelPropagation: true,
            minScrollbarLength: 20, ...config
        });
        setScrollbar(instance);
        control.addEventListener('ps-scroll-y', listenScrollY);
        control.addEventListener('ps-scroll-y', listenScrollX);

        const cleanUp = () => {
            instance.destroy();
            control.removeEventListener('ps-scroll-y', listenScrollY);
            control.removeEventListener('ps-scroll-y', listenScrollX);
        };
        return cleanUp;
    }, []);

    const cls = `beyond-perfect-scrollbar${className ? ` ${className}` : ''}`;
    return (
        <div style={{
            position: 'relative'
        }} ref={ref} className={cls}>
            {children}
        </div>
    );
}
