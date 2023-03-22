import { useEffect } from "react";

const useSortingTable = (data, field, sorted) => {
  let sortedEmployees = data;

  // sorted function
  useEffect(() => {
    if (sorted) {
      sortedEmployees = data.sort((a, b) => {
        return a[field].toString().localeCompare(b[field]).toString();
      });
    } else {
      sortedEmployees = data.sort((a, b) => {
        return b[field].toString().localeCompare(a[field]).toString();
      });
    }
  }, [sorted]);

  return { sortedEmployees };
};

export default useSortingTable;
