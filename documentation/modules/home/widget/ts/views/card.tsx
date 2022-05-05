import * as React from 'react';
import {Link} from "@beyond/ui/link/code";

export function Card({title, href, children}) {
    return (
        <article className="docs__card">
            <header>
                <h3>{title}</h3>
            </header>
            <section>
                {children}
            </section>
            <section className="card__action">
                <Link className="link-more" href={href}>Leer más</Link>
            </section>
        </article>
    )
}
