import React from "react";

const Pagination = ({ currentPage, setCurrentPage, pages }) => {
  return (
    <div>
      {" "}
      <ul className="pagination" style={{ cursor: "pointer" }}>
        <li className={currentPage == pages[0] ? "page-item disabled" : ""}>
          <a
            className="page-link"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </a>
        </li>
        {pages.map((number, idx) => {
          return (
            <li
              key={idx}
              className={
                currentPage == number ? "page-item active" : "page-item"
              }
            >
              <a className="page-link" onClick={() => setCurrentPage(number)}>
                {number}
              </a>
            </li>
          );
        })}

        <li
          className={
            currentPage == pages[pages.length - 1]
              ? "page-item disabled"
              : "page-item"
          }
        >
          <a
            className="page-link"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
