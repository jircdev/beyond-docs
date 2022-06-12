import * as React from 'react';
import {CodeBox} from "../navigator-box";
import {BeyondImage} from '@beyond/ui/image/code';
import {BeyondIcon} from '@beyond/ui/icons/code';
import {SVGS} from "../../icons";
import {Link, Elink} from "@beyond/ui/link/code";
import {useHomeContext} from "../context";


export function Realtime() {
    const {texts: {realtime, hmr, readMore}} = useHomeContext();
    return (
        <>
            <section className="block__features  three-columns realtime-section">
                <div className="icons icons-graphic">
                    <BeyondIcon icon={SVGS.realtime.icon} viewBox={SVGS.realtime.viewBox}/>
                </div>
                <div className="content">
                    <h3>{hmr.title}</h3>
                    <p> {hmr.texts}</p>
                    <Link href="/docs/hmr" className="link-more">{readMore}</Link>
                </div>
                <div className="content">
                    <h3>{realtime.title}</h3>
                    <p>{realtime.startText} <Elink href={realtime.link}> websockets </Elink> {realtime.endText}</p>
                    <Link href="/docs/hmr" className="link-more">{readMore}</Link>
                </div>
            </section>
        </>
    )
}
