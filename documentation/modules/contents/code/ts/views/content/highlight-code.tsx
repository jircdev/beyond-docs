// import * as React from 'react';
// import {
//     Options, registerLanguages, htmlRender, init, process,
//     Highlighter, JavaScript, SCSS, Markdown
// } from "highlight-ts";
//
// registerLanguages(JavaScript, SCSS, Markdown)
//
//
// export function HCode({language, code}) {
//
//     // @ts-ignore
//     const [highlighter, setHighlighter] = React.useState<Highlighter>();
//     React.useEffect(() => {
//         const options: Options = {classPrefix: ''};
//         const instance: Highlighter<string> = init(htmlRender, options);
//         setHighlighter(instance);
//     }, [])
//
//     if (!highlighter) return;
//     const html = process(highlighter, code, [language]);
//     return (
//         <pre>
//             {html}
//         </pre>
//     )
// }
