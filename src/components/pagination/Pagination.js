import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  // let next = () => {
  //   setPageNumber((x) => x + 1);
  // };
  // let prev = () => {
  //   if (pageNumber === 1) return;
  //   setPageNumber((x) => x - 1);
  // };
  let [width, setWidth] = useState(window.innerWidth);

  let updateDimension = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);
  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .next,
          .prev {
            display: none;
            .pagination: 12px;
          }
        }
      `}</style>

      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4"
        pageCount={info?.pages}
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextLabel="Next"
        previousLabel="Prev"
        nextclassNameName="btn btn-primary next"
        previousclassNameName="btn btn-primary prev"
        pageclassNameName="page-item"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={6}
        pageLinkclassNameName="page-link"
        activeclassNameName="active"
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
      />
    </>
    // <div className="container d-flex justify-content-center gap-5 my-5">
    //   <button onClick={prev} className="btn btn-primary">
    //     Prev
    //   </button>
    //   <button onClick={next} className="btn btn-primary">
    //     Next
    //   </button>
    // </div>
  );
};

export default Pagination;
