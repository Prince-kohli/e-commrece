import React from "react";

const Pagination = ({
  productsPerPage,
  totalProduct,
  paginate,
  activePage,
}) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProduct / productsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <ul className="pagination default-pagination lab-ul">
      <li>
        <a
          href="#"
          onClick={() => {
            if (activePage > 1) {
              paginate(activePage - 1);
            }
          }}
        >
          <i class="fa-solid fa-angle-left" style={{ marginTop: 23 }}></i>
        </a>
      </li>
      {pageNumber.map((number) => (
        <li
          key={number}
          className={`page-item ${number === activePage ? "bg-warning" : ""}`}
        >
          <button
            onClick={() => paginate(number)}
            className="bg-transparent"
            style={{ border: 0 }}
          >
            {number}
          </button>
        </li>
      ))}
      <li>
        <a
          href="#"
          onClick={() => {
            if (activePage < pageNumber.length) {
              paginate(activePage + 1);
            }
          }}
        >
          <i class="fa-solid fa-angle-right" style={{ marginTop: 23 }}></i>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
