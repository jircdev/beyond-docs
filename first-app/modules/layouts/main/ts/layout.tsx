import * as React from "react";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "menu-layout": any;
            "beyond-layout-children": any;
        }
    }
}

export /*bundle*/
class Widget extends React.Component {
    render() {
        return (
            <div className="content">
                <main>
                    <beyond-layout-children/>
                </main>
            </div>
        );
    }
}