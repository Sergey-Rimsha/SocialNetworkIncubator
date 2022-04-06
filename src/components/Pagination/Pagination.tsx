import React, {useState} from "react";

import "./Pagination.scss";

type PaginationPropsType = {
    totalCount: number
    userPageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number, userPageSize?: number) => void
}

export const Pagination = (props: PaginationPropsType) => {

    const [prevBtn, setPrevBtn] = useState(true);
    const [nextBtn, setNextBtn] = useState(false);

    // if (props.currentPage <= 1 ) setPrevBtn(true);

    const pageUsersCount = Math.ceil(props.totalCount / props.userPageSize);
    // const currentPage = props.currentPage;

    const onClickPrevHandler = (currentPage: number) => {

        let newCurrentPage = currentPage - 1;

        if (newCurrentPage === 1) {
            setPrevBtn(true);
        } else if (newCurrentPage > 1) {
            setPrevBtn(false);
        }

        if (newCurrentPage >= 1) {
            props.onPageChanged(newCurrentPage);
        }
    }

    const onClickNextHandler = (currentPage: number) => {
        setPrevBtn(false);
        let newCurrentPage = currentPage + 1;
        props.onPageChanged(newCurrentPage);
    }



    const renderPagination = () => {
        console.log(props.currentPage)
        let page = [];

        const showStepPage = 5;


        for (let i = 1; i < pageUsersCount; i++) {
            page.push(i);
        }



        return (
            page.map(p => {
                const activePage = p === props.currentPage ? 'active' : '';

                if (p > props.currentPage - showStepPage && p < props.currentPage + showStepPage) {
                    return (
                        <span>
                            <span className={activePage} onClick={() => props.onPageChanged(p, props.userPageSize)}>{p}</span>
                        </span>
                    )
                } else {
                    return '';
                }
            })
        )


    }

    return (
        <section className="pagination">
            <button disabled={prevBtn} onClick={() => onClickPrevHandler(props.currentPage)}>{'<'}</button>
            <div>
                {renderPagination()}
            </div>
            <button onClick={() => onClickNextHandler(props.currentPage)}>{'>'}</button>
        </section>
    )
}