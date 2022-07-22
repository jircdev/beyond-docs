import {store} from "@beyond/docs/examples-sm-store";

export /*bundle*/
function updateCount() {
    const {counter} = store.getState();
    ++counter.count;
}
