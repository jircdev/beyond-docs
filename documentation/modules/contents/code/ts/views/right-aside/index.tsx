import * as React from 'react';
import {Link} from '@beyond/ui/link/code';
import {RightAsideItem} from "./item";

interface IProps {
    container: ShadowRoot,
    titles: HTMLElement[],
    children?: JSX.Element,
}

export /*bundle*/
const RightAside = React.memo(({container, titles}: IProps) => {
        const output = titles.map((item, i) => {
            return <RightAsideItem key={`${item.id}.${i}`} item={item} container={container}/>

        });

        const ref = React.useRef();
        React.useEffect(() => {
            const items = Array.from(ref.current.querySelectorAll('li'))

            const callback = (entries) => {
                const check = item => {
                    const {top} = item.boundingClientRect;
                    if (top < 500) {
                        const {target} = item;
                        const listItem = items.find(item => item.dataset.id === target.id);
                        const active = items.find(item => item.classList.contains('item--active'));
                        if (active) active.classList.remove('item--active')
                        listItem.classList.add('item--active');
                    }

                };
                entries.forEach(check);
            };

            const observer = new IntersectionObserver(callback, {
                root: null,
                rootMargin: '-50% 0% -50% 0%',

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
