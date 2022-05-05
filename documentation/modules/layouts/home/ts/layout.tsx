import * as React from "react";
import {beyond__styles} from '@beyond/docs/layout/styles/code';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "menu-layout": any;
            "beyond-layout-children": any;
            "beyond-docs-header": any;
        }
    }
}

export function Layout() {
    return (

        <div className="main-widget">

            <div className="home-page">

                <main>
                    <beyond-layout-children/>
                </main>
            </div>
        </div>

    );
}

export /*bundle*/ const Widget = Layout;
