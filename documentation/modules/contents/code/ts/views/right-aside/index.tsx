import * as React from "react";
import { Link } from "@beyond/ui/link";
import { RightAsideItem } from "./item";
import { useDocsContext } from "../../context";

interface ISpecs {
    shadowRoot: ShadowRoot;
    item: any;
    active?: boolean;
}
export /*bundle*/
const RightAside = () => {
    const { shadowRoot, sections, component } = useDocsContext();

    const [titles, setTitles] = React.useState(sections);
    const ref = React.useRef(null);

    React.useLayoutEffect(() => {
        const callback = (entries) => {
            let selected;

            entries.forEach((entry) => {
                const {
                    boundingClientRect: { top },
                    target,
                } = entry;
                const list = [...ref.current.querySelectorAll("li")];
                let position = top + 100;
                if (position < 50 || position > 300 || selected) return;

                const item = list.find((item) => {
                    return item.dataset.id === target.id;
                });

                if (!item) {
                    console.warn("the item selected does not exist");
                }
                selected = item;
                const active = list.find((item) => item.classList.contains("item--active"));
                if (active) active.classList.remove("item--active");
                item.classList.add("item--active");
            });
        };

        const observer = new IntersectionObserver(callback, {
            threshold: [0.5],
            rootMargin: "-150px 0px  50%",
        });

        const items = component.shadowRoot.querySelectorAll("h1,h2, h3,h4");
        items.forEach((item) => observer.observe(item));
    }, []);

    const output = titles.map((item, i) => {
        const attrs: ISpecs = { shadowRoot, item };

        if (i === 0) attrs.active = true;
        return <RightAsideItem key={`${item}.${i}`} {...attrs} />;
    });

    return (
        <aside className="docs__aside-navbar" ref={ref}>
            <div className="aside__container">
                <h4>Right Aside</h4>
                <ol>{output}</ol>
            </div>
        </aside>
    );
};
