// src\components\pagination\Pagination.tsx

import { ChevronLeft } from "../../assets/icons/chevronLeft";
import { ChevronRight } from "../../assets/icons/chevronRight";

type PaginationProps = {
  /**
   * Número total de páginas.
   */
  pages: number,

  /**
   * Página actual.
   */
  page: number,

  /**
   * Función que se ejecutará al cambiar de página.
   */
  onChange: (page: number) => void
};

export const Pagination: React.FC<PaginationProps> = ({
  pages,
  page,
  onChange
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button
        className='pagination__button pagination__control group'
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        <ChevronLeft
          className="pagination__icon"
        />
      </button>

      {pageNumbers.map((number) => (
        <button
          className={[
            'pagination__button',
            'pagination__page',
            `${number === page 
              ? 'pagination__page--active'
              : 'pagination__page--inactive'
            }`
          ].join(' ')}
          disabled={number === page}
          onClick={() => onChange(number)}
        >{number}</button>
      ))}

      <button
        className='pagination__button pagination__control group'
        disabled={page === pages}
        onClick={() => onChange(page + 1)}
      >
        <ChevronRight
          className="pagination__icon"
        />
      </button>
    </div>
  );
};