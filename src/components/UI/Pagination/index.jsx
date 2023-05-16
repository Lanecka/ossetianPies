import ReactPaginate from "react-paginate";
import style from './Pagination.module.scss';

const Pagination = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className={style.pagination}
      breakLabel="..."
      nextLabel=">>"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={6}
      pageCount={6}
      forcePage={currentPage}
      previousLabel="<<"
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination;