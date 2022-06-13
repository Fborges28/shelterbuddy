// Reference: https://codesandbox.io/s/react-hooks-material-ui-pagination-example-trp9o?file=/src/Pagination.js:0-40

import { useState } from "react";

interface Props<T> {
    next: () => void,
    prev: () => void,
    sliceContent: (data: T[]) => void,
    goTo: (page: number) => void,
    slicedContent: T[],
    maxPage: number
}

export function usePagination<PaginationData>(data: PaginationData[], perPage: number): Props<PaginationData>{
    const [currentPage, setCurrentPage] = useState(1);
    const [slicedContent, setSlicedContent] = useState(data);
    const maxPage = Math.ceil(data.length / perPage);

    function sliceContent(currentData: PaginationData[]){
        const sliceBegin = (currentPage - 1) * perPage;
        const sliceEnd = sliceBegin + perPage;
        const result = currentData.slice(sliceBegin, sliceEnd);
        console.log("sliceContent", result);
        setSlicedContent(result);
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
        slicedContent,
        sliceContent,
        next,
        prev,
        goTo,
        maxPage
    };
}