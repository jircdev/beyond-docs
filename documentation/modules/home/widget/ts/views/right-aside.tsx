import * as React from 'react';
import {Link} from '@beyond/ui/link/code';

interface IProps {
    container: ShadowRoot,
    titles: HTMLElement[],
    children?: JSX.Element,
}

export const RightAside = React.memo(({container, titles}: IProps) => {
        const output = titles.map(item => {
            return <li key={item.innerText} data-id={item.id}>
                <Link href={`#${item.id}`}>{item.innerText}</Link>
            </li>

        });

        const ref = React.useRef();
        React.useEffect(() => {
            const items = Array.from(ref.current.querySelectorAll('li'))

            const callback = (entries) => {
                const check = item => {
                    const {target} = item;
                    const listItem = items.find(item => item.dataset.id === target.id);
                    if (!item.isIntersecting || item.boundingClientRect.top < 200) return;
                    const active = items.find(item => item.classList.contains('item--active'));
                    if (active) active.classList.remove('item--active')
                    listItem.classList.add('item--active');
                };
                entries.forEach(check);
            };

            const observer = new IntersectionObserver(callback, {
                root: null,
                rootMargin: '-40px',
                threshold: 0
            });
            titles.forEach(item => observer.observe(item))
        });
        return (
            <aside className="docs__aside-navbar" ref={ref}>
                <div className="aside__container">
                    <h4>En esta página</h4>
                    <ol>
                        {output}
                    </ol>
                </div>

            </aside>
        )
    }
);
