import * as React from 'react';
import {Svg} from "./svg";
import {finder} from "./finder";
import {beyond} from '@beyond-js/kernel/core/ts';

const key = '__beyond-mode';

export function Switch() {
    const ref = React.useRef(null);
    const defaultTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    let userTheme = window?.localStorage.getItem(key) ?? defaultTheme;

    const cls = `btn-theme-toggle btn-theme--${userTheme}`;


    const setTheme = (theme) => {
        const container = document.querySelector('html');
        container.setAttribute('data-beyond-mode', theme);
        const current = `btn-theme--${theme}`;
        const another = `btn-theme--${theme === 'dark' ? 'light' : 'dark'}`;
        ref?.current.classList.add(current);
        beyond.widgets.attributes.add('data-beyond-mode', theme);
        if (ref?.current.classList.contains(another)) ref?.current.classList.remove(another);

        finder();
    }
    React.useEffect(() => {
        const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const userTheme = window?.localStorage.getItem(key);
        if (!userTheme) {
            window?.localStorage.setItem(key, defaultTheme)
        }
        setTheme(window?.localStorage.getItem(key));
    }, []);

    const onClick = event => {
        event.preventDefault();
        const theme = localStorage.getItem(key) === 'dark' ? 'light' : 'dark';
        localStorage.setItem(key, theme);
        setTheme(theme);
    }
    return (
        <button
            ref={ref}
            onClick={onClick}
            className={cls}
            title="Toggles light & dark"
            aria-label="auto"
            aria-live="polite"
        >
            <Svg/>
        </button>
    )
}
