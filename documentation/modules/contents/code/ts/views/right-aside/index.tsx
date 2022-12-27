import * as React from "react";
import { Link } from "@beyond/ui/link";
import { RightAsideItem } from "./item";
import { useDocsContext } from "../../context";

interface IProps {
    container: ShadowRoot;
    titles: HTMLElement[];
    children?: JSX.Element;
}

export /*bundle*/
const RightAside = ({}: IProps) => {
    return null;
    const {
        component,
        texts: {
            rightAside: { title },
        },
    } = useDocsContext();
    const [titles, setTitles] = React.useState([]);
    const ref = React.useRef(null);

    React.useEffect(() => {
        const items: HTMLElement[] = Array.from(ref.current.querySelectorAll("li"));

        const callback = (entries) => {
            const check = (item) => {
                const { top } = item.boundingClientRect;
                if (top < 500) {
                    const { target } = item;
                    const listItem = items.find((item) => item.dataset.id === target.id);
                    const active = items.find((item) => item.classList.contains("item--active"));
                    if (active) active.classList.remove("item--active");
                    listItem.classList.add("item--active");
                }
            };
            entries.forEach(check);
        };

        const observer = new IntersectionObserver(callback, {
            root: null,
            rootMargin: "-50% 0% -50% 0%",
            threshold: 0,
        });
        titles.forEach((item) => observer.observe(item));
    });

    React.useEffect(() => {
        window?.setTimeout(() => {
            const titles = Array.from(component.shadowRoot.querySelectorAll("h1,h2,h3"));
            setTitles(titles);
        }, 100);

        const body = document.querySelector("body");
        body.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    if (!titles) return null;

    const output = titles.map((item, i) => {
        return <RightAsideItem key={`${item.id}.${i}`} item={item} container={component.shadowRoot} />;
    });

    return (
        <aside className="docs__aside-navbar" ref={ref}>
            <div className="aside__container">
                <h4>{title}</h4>
                <ol>{output}</ol>
            </div>
        </aside>
    );
};
