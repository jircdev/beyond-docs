import * as React from 'react';
import {Code} from './code';

export /*bundle*/ function CodeBox({title, language, children}) {

    return (
        <div className="code__box">
            <header>
                <div className="box__buttons">
                    <div className="circle red"/>
                    <div className="circle blue"/>
                    <div className="circle green"/>
                </div>
                {title}
            </header>
            <section className="box__code">
                <Code language={language}>
                    {children}
                </Code>
            </section>


        </div>
    )
}
