import React from "react";
import { propsAreEqual } from "../utils/helperfunctions";

const Cell = ({ data }) => {
  return <span>{data}</span>;
};

const MemomizedCell = React.memo(Cell, propsAreEqual);

export default MemomizedCell;
