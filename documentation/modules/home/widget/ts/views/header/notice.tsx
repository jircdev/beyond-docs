import * as React from 'react';
import {useHomeContext} from "../context";

export function Notice() {
    const {texts: {header: {notice}}} = useHomeContext();
    return (
        <section className="flex-container flex-center header-notice bg-primary-accent pd-5">
            {notice}
        </section>
    )
}
