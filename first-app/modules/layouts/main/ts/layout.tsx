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
class Layout extends React.Component {
    render() {
        return (
            <main>
                <beyond-layout-children/>
            </main>
        );
    }
}
