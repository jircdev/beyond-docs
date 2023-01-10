import React from "react";
import { model } from "../model";
export function List({ data }) {
    const output = model.items.map((item) => {
        return <li>{item.name}</li>;
    });
    return <ul style={{ listStyle: "none" }}>{output}</ul>;
}
