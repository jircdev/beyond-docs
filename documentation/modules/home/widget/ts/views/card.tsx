import * as React from 'react';
import {Link} from "@beyond/ui/link/code";

export function Card({title, href, children}) {
    return (
        <article  className="docs__card">
            <header>
                <h3>{title}</h3>
            </header>
            <section>
                <p className="p2">
                    {children}
                </p>

            </section>
            <section className="card__action">
                <Link href={href} className="link-more">Leer más</Link>
            </section>
        </article>
    )
}
