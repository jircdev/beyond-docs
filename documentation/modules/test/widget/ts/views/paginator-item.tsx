import React from "react";
export function PaginatorItem({ position, currentPage, children }) {
    return (
        <li key={`pager-${position}`}>
            <a className="btn btn-primary" href={`/?page=${position}`}>
                {children ? children : position}
            </a>
        </li>
    );
}
