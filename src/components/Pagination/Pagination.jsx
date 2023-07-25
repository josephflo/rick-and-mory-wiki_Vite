import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  const handlePageClick = (data) => {
    setPageNumber(data.selected + 1);
  };

  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-2"
      pageCount={info?.pages}
      forcePage={pageNumber === 1 ? 0 : pageNumber -1}
      onPageChange={handlePageClick}
      previousLabel="Prev"
      nextLabel="Next"
      previousClassName="btn btn-primary"
      nextClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
    />
  );
};

export default Pagination;
