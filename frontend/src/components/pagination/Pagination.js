import React from "react";
import lodash from "lodash";

const Pagination = (props) => {
  const { itemCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = itemCount / pageSize;
  const pages = lodash.range(1, pageCount + 1);

  return (
    <div>
      <ul>
        {pages.map((page) => (
          <li
            key={page}
            onClick={() => onPageChange(page)}
            className={
              page === currentPage
                ? "text-red-800 cursor-pointer text-3xl sm:text-5xl lg:text-6xl"
                : "text-green-800 cursor-pointer text-3xl sm:text-5xl lg:text-6xl"
            }
          >
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
