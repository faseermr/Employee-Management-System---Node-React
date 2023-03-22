import React from "react";
import { BiSortAlt2 } from "react-icons/bi";

const SortingTable = ({ setSorted, sorted, setSortedField, field }) => {
  return (
    <BiSortAlt2
      onClick={() => {
        setSorted(!sorted);
        setSortedField(field);
      }}
      style={{ cursor: "pointer", marginLeft: "10px" }}
    />
  );
};

export default SortingTable;
