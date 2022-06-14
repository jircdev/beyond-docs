import * as React from "react";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "menu-layout": any;
            "beyond-layout-children": any;
            "beyond-docs-header": any;
        }
    }
}

export default function () {
    return (
        <div className="main-widget">
            <div className="home-page">
                <docs-header-menu/>
                <main>
                    <beyond-layout-children/>
                </main>
            </div>
        </div>
    );
}
