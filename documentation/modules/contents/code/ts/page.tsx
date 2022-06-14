import * as React from 'react';
import {RightAside} from "./views/right-aside";
import {useContent} from "./use-content";
import {PreloadPage} from "./loading";
import {DocsContext} from "./context";

export /*bundle*/ function ContentsPage({component, contentId, sub, hmrChanged}) {

    const [titles, setTitles] = React.useState([]);
    const [content, fetching, texts] = useContent(contentId, sub, hmrChanged);


    React.useEffect(() => {
        window?.setTimeout(() => {
            const titles = Array.from(component.shadowRoot.querySelectorAll('h1,h2,h3'));
            setTitles(titles);
        }, 50);
    }, []);

    React.useEffect(() => {
        const body = document.querySelector('body');
        body.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);
    if (fetching || !texts) return <PreloadPage/>;

    const Control = content.control;
    // const Control = () => <h2>aja</h2>;
    return (
        <DocsContext.Provider value={{
            texts: texts
        }}>
            <div className="page__main-container">
                <section className="page__main-content">
                    <Control/>
                </section>
                {!!titles.length && <RightAside container={component.shadowRoot} titles={titles}/>}
            </div>
        </DocsContext.Provider>

    );
}
