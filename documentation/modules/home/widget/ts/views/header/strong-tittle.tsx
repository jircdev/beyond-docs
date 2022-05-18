import * as React from 'react';


export function StrongTitle() {

    const labels = [
        "NPM",
        "NodeJS",
        "Micro frontends",
        "Micro services",
        "React, Vue, Svelte",
        "Mobile",
        "Web"
    ]
    const ref = React.useRef(null);
    let index = 0;
    const [current, setLabel] = React.useState<String>(index);
    React.useEffect(() => {
        const {current: target} = ref;
        let i = 1;
        const interval = window.setInterval(() => {
            target.classList.add('fade-out');

            window.setTimeout(() => {
                target.innerText = labels[i];
                target.classList.remove('fade-out');
                target.classList.remove('fade-in');
                i = (i + 1 === labels.length) ? 0 : i + 1;
            }, 500)
        }, 2000);
    }, [])

    return (
        <strong ref={ref}>{labels[current]}</strong>
    );

}
