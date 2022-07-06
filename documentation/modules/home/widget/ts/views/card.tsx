import * as React from 'react';
import {Link} from "@beyond/ui/link";
import {BeyondImage} from '@beyond/ui/image';

export function Card({title, href, children, img}) {
    return (
        <article className="docs__card">
            <header>
                {img && <BeyondImage src={`/images/home/${img}.png`}/>}
                <h3>{title}</h3>
            </header>
            <section>
                <p className="p2">
                    {children}
                </p>
                <section className="card__action">
                    <Link href={href} className="link-more">Leer más</Link>
                </section>
            </section>

        </article>
    )
}
