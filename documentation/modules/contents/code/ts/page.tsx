import * as React from 'react';
import {RightAside} from "./views/right-aside";
import {useContent} from "./use-content";
import {PreloadPage} from "./loading";

export /*bundle*/ function ContentsPage({component, contentId, sub}) {

    const [hmrChanged, setHmr] = React.useState(performance.now());
    const [titles, setTitles] = React.useState([]);
    const [content, fetching] = useContent(contentId, sub, hmrChanged);


    React.useEffect(() => {
        window?.setTimeout(() => {
            const titles = Array.from(component.shadowRoot.querySelectorAll('h1,h2'));
            setTitles(titles);
        }, 50);
    }, []);
    if (fetching) return <PreloadPage/>;
    const Control = content.control;
    return (
        <div className="page__main-container">
            <section className="page__main-content">
                <Control/>
            </section>
            {titles && <RightAside container={component.shadowRoot} titles={titles}/>}
        </div>

    );
}
