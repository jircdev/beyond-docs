import * as React from 'react';
import * as Prism from 'prismjs';


export /*bundle*/ function Code({language = 'typescript', children}) {
    const createMarkup = () => {

        if (!children) {
            return {__html: ''};
        }
        const html = Prism.highlight(children, Prism.languages.javascript, language);
        return {__html: html}
    }
    const cls = 'code-container';
    return (
        <div className={cls}>
        <pre>
            <code className={`language-${language}`} dangerouslySetInnerHTML={createMarkup()}/>
        </pre>
        </div>
    );
}
