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

    const pageUsersCount = Math.ceil(props.totalCount / props.userPageSize);

    // disabled prev btn если текущая страница 1
    const checkPrevBtn = (currentPage: number) => {
        (currentPage > 1) ? setPrevBtn(false) : setPrevBtn(true);
    }

    // disabled nextBtn если текущая страница последняя
    const checkNextBtn = (currentPage: number) => {
        (currentPage === pageUsersCount) ? setNextBtn(true) : setNextBtn(false);
    }


    const onClickPrevHandler = (currentPage: number) => {
        let newCurrentPage = currentPage - 1;

        if (newCurrentPage >= 1) {
            // проверяем какую страницу выбираем и disabled prev btn если страница 1
            checkPrevBtn(newCurrentPage);
            checkNextBtn(newCurrentPage);
            props.onPageChanged(newCurrentPage);
        }
    }

    const onClickNextHandler = (currentPage: number) => {
        let newCurrentPage = currentPage + 1;
        // проверяем какую страницу выбираем и disabled prev btn если страница 1
        checkPrevBtn(newCurrentPage);
        checkNextBtn(newCurrentPage);

        props.onPageChanged(newCurrentPage);
    }

    const onClickPageChanged = (newCurrentPage: number) => {
        checkPrevBtn(newCurrentPage);
        checkNextBtn(newCurrentPage);
        props.onPageChanged(newCurrentPage, props.userPageSize);
    }


    const renderPagination = () => {
        let page = [];
        const showStepPage = 5;

        for (let i = 1; i <= pageUsersCount; i++) {
            page.push(i);
        }

        return (
            page.map(p => {
                const activePage = p === props.currentPage ? 'active' : '';
                let check = p > props.currentPage - showStepPage && p < props.currentPage + showStepPage;
                if (check) {
                    return (
                        <span key={p}>
                            <span className={activePage} onClick={() => onClickPageChanged(p)}>{p}</span>
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
            <button disabled={nextBtn} onClick={() => onClickNextHandler(props.currentPage)}>{'>'}</button>
            {/*test btn*/}
            {/*<button onClick={() => props.onPageChanged(1835, props.userPageSize)}>1835</button>*/}
        </section>
    )
}