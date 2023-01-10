import * as React from "react";
import { RightAside } from "./views/right-aside";

export /*bundle*/ function ContentsContainer({ children }) {
    return (
        <div className="page__main-container">
            <section className="page__main-content">{children}</section>
            {/* <RightAside/> */}
        </div>
    );
}
