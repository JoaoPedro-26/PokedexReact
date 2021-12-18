import React from "react";

const Max_items = 9;
const Max_left =  (Max_items - 1) / 2

const Pagination = ({ limit, total, offset, setOffset}) => {
    const current = offset ? (offset / limit) + 1 : 1;
    const pages = Math.ceil(total / limit);
    const first = Math.max(current - Max_left, 1);

    return (
        <ul>
            {Array.from({ length: Max_items})
            .map((_, index) => index + first)
            .map((page) => (
                <ul>
                    <button onClick={() => setOffset((page - 1) * limit)}>{page}</button>
                </ul>
            ))}
        </ul>
    )
}

export default Pagination;