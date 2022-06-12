// Reference: https://codesandbox.io/s/react-hooks-material-ui-pagination-example-trp9o?file=/src/Pagination.js:0-40

import { useState } from "react";

interface Props<T> {
    next: () => void,
    prev: () => void,
    goTo: (page: number) => void,
    currentContent: () => T[],
    maxPage: number
}

export function usePagination<PaginationData>(data: PaginationData[], perPage: number): Props<PaginationData>{
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / perPage);

    function currentContent(){
        const sliceBegin = (currentPage - 1) * perPage;
        const sliceEnd = sliceBegin + perPage;
        return data.slice(sliceBegin, sliceEnd);
    }

    function next(){
        setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
    }

    function prev(){
        setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
    }

    function goTo(page: number){
        const pageNumber = Math.max(1, page);
        setCurrentPage(Math.min(pageNumber, maxPage));
    }

    return {
        currentContent,
        next,
        prev,
        goTo,
        maxPage
    };
}