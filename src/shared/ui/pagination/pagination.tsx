import { ComponentPropsWithoutRef, FC, ReactElement, useState } from 'react';

import './pagination.scss';

type PaginationPropsType = {
  totalCount: number;
  userPageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number, userPageSize?: number) => void;
};

export const Pagination: FC<PaginationPropsType> = ({ totalCount, currentPage, onPageChanged, userPageSize }) => {
  const [prevBtn, setPrevBtn] = useState(true);
  const [nextBtn, setNextBtn] = useState(false);

  const pageUsersCount = Math.ceil(totalCount / userPageSize);

  // disabled prev btn если текущая страница 1
  const checkPrevBtn = (currentPage: number): void => {
    // eslint-disable-next-line no-unused-expressions
    currentPage > 1 ? setPrevBtn(false) : setPrevBtn(true);
  };

  // disabled nextBtn если текущая страница последняя
  const checkNextBtn = (currentPage: number): void => {
    // eslint-disable-next-line no-unused-expressions
    currentPage === pageUsersCount ? setNextBtn(true) : setNextBtn(false);
  };

  const onClickPrevHandler = (currentPage: number): void => {
    const newCurrentPage = currentPage - 1;

    if (newCurrentPage >= 1) {
      // проверяем какую страницу выбираем и disabled prev btn если страница 1
      checkPrevBtn(newCurrentPage);
      checkNextBtn(newCurrentPage);
      onPageChanged(newCurrentPage);
    }
  };

  const onClickNextHandler = (currentPage: number): void => {
    const newCurrentPage = currentPage + 1;

    // проверяем какую страницу выбираем и disabled prev btn если страница 1
    checkPrevBtn(newCurrentPage);
    checkNextBtn(newCurrentPage);

    onPageChanged(newCurrentPage);
  };

  const onClickPageChanged = (newCurrentPage: number): void => {
    checkPrevBtn(newCurrentPage);
    checkNextBtn(newCurrentPage);
    onPageChanged(newCurrentPage, userPageSize);
  };

  const handleKeyPress = (event: ComponentPropsWithoutRef<'div'>, newCurrentPage: number): void => {
    if (event.key === 'Enter') {
      onClickPageChanged(newCurrentPage);
    }
  };

  const renderPagination = (): (ReactElement | string)[] => {
    const page = [];
    const showStepPage = 5;

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= pageUsersCount; i++) {
      page.push(i);
    }

    return page.map(p => {
      const activePage = p === currentPage ? 'active' : '';
      const check = p > currentPage - showStepPage && p < currentPage + showStepPage;

      if (check) {
        return (
          <span key={p}>
            <div
              role="button"
              tabIndex={0}
              className={activePage}
              onKeyDown={e => handleKeyPress(e, p)}
              onClick={() => onClickPageChanged(p)}
            >
              {p}
            </div>
          </span>
        );
      }

      return '';
    });
  };

  return (
    <section className="pagination">
      <button type="button" disabled={prevBtn} onClick={() => onClickPrevHandler(currentPage)}>
        {'<'}
      </button>
      <div className="pagination__page">{renderPagination()}</div>
      <button type="button" disabled={nextBtn} onClick={() => onClickNextHandler(currentPage)}>
        {'>'}
      </button>
      {/* test btn */}
      {/* <button onClick={() => props.onPageChanged(1835, props.userPageSize)}>1835</button> */}
    </section>
  );
};
