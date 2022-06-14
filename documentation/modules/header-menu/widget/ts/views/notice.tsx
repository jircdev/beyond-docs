import * as React from 'react';

export function Notice({texts: {notice}}) {
    return (
        <section className="flex-container flex-center header-notice bg-primary-accent pd-5">
            {notice}
        </section>
    );
}
