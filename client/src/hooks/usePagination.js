import { useState, useEffect } from "react";

const usePagination = (data) => {
  const [itemPerPage, setItemPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [indexLastItem, setIndexLastItem] = useState(currentPage * itemPerPage);
  const [indexFirstItem, setIndexFirstItem] = useState(
    indexLastItem - itemPerPage
  );

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemPerPage); i++) {
    if (!pages.includes(i)) {
      pages.push(i);
    }
  }

  useEffect(() => {
    setIndexLastItem(currentPage * itemPerPage);
    setIndexFirstItem(indexLastItem - itemPerPage);
  }, [currentPage, indexLastItem]);

  return { indexFirstItem, indexLastItem, currentPage, pages, setCurrentPage };
};

export default usePagination;
