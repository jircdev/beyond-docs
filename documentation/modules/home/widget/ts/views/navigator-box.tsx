import * as React from 'react';
import {Code} from '@beyond/docs/code/code';

export function CodeBox({title, children}) {

    return (
        <div className="navigator__box">
            <header>
                <div className="box__buttons">
                    <div className="circle red"/>
                    <div className="circle blue"/>
                    <div className="circle green"/>
                </div>
                {title}
            </header>
            <section className="box__code">
                <Code language="json">
                    {children}
                </Code>
            </section>


        </div>
    )
}
