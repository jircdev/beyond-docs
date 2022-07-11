import * as React from "react";
import {store} from "@beyond/docs/examples/sm/store";

export /*bundle*/
function Page() {
    const [state, {selectorCount}] = store.getStateAndSelectors();
    store.useStateAndSelectorsReact([state.counter], [selectorCount]);

    return (
        <div className="section">
            <h2>Click counter {selectorCount.value}</h2>
            <div className="items">
                <counter-react/>
                <counter-vue/>
                <counter-svelte/>
            </div>
        </div>
    );
}
