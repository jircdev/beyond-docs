import * as React from 'react';
import {BeyondImage} from '@beyond/ui/image/code';
import {Link, Elink} from "@beyond/ui/link/code";
import {useHomeContext} from "../context";


export function Realtime() {
    const {texts: {realtime, hmr, readMore}} = useHomeContext();
    return (

        <section className="page-section primary-surface realtime-section">
            <div className="top-img container no-mv no-pv">
                <BeyondImage alt="BeyondJS - HMR & real time connections" src="/images/home/separator.png"/>
            </div>
            <div className="container grid-container two-columns  no-mv">
                <div className="content">
                        <span className="pretitle t3 secondary-accent">
                            {hmr.pretitle}
                        </span>
                    <h3>{hmr.title}</h3>
                    <p> {hmr.texts}</p>
                    <Link href="/docs/hmr" className="link-more">{readMore}</Link>
                </div>
                <div className="content">
                        <span className="pretitle t3 secondary-accent">
                            {realtime.pretitle}
                        </span>
                    <h3>{realtime.title}</h3>
                    <p>{realtime.startText} <Elink href={realtime.link}> websockets </Elink> {realtime.endText}</p>
                    <Link href="/docs/hmr" className="link-more">{readMore}</Link>
                </div>
            </div>
        </section>
    )
}
