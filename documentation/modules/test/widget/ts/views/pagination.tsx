import React from "react";
import { PaginatorItem } from "./paginator-item";
export function Pagination({ data }) {
    const {
        specs: { total, itemsPerPage },
        currentPage,
        totalPages,
    } = data;
    console.log(1, data, totalPages);
    const output = [];
    if (currentPage > 1) {
        //todo: add boton ir al inicio
        output.push(
            <PaginatorItem key="first-link" position={1}>
                Ir al inicio
            </PaginatorItem>
        );
    }
    for (let i = 0; i < totalPages; ++i) {
        output.push(
            <li key={`pager-${i}`}>
                <a className="btn btn-primary" href={`/?page=${i}`}>
                    {i === currentPage ? "Pagina Actual" : i}
                </a>
            </li>
        );
    }
    return <ul>{output}</ul>;
}
