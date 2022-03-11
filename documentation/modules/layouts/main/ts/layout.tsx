import * as React from "react";
import {beyond__styles} from '@beyond/docs/layout/styles/code';
import {PerfectScroll} from "@beyond/ui/perfect-scroll/code";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "menu-layout": any;
            "beyond-layout-children": any;
            "beyond-docs-header": any;
        }
    }
}

export /*bundle*/
class Widget extends React.Component {
    render() {
        return (

            <div className="main-widget">
                <beyond-docs-header/>
                <div className="docs-page container">
                    <menu-layout/>
                    <main>
                        <beyond-layout-children/>
                    </main>
                </div>
            </div>

        );
    }
}
