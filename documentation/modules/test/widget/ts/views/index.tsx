import * as React from "react";
import { model } from "../model";
import { List } from "./list";
import { Pagination } from "./pagination";
export /*bundle*/
function View() {
    return (
        <>
            <List data={model} />
            <Pagination data={model} />
        </>
    );
}
