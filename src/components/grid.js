import React, { Suspense } from "react";
import { propsAreEqual } from "../utils/helperfunctions";

const Cell = React.lazy(() => import("./cell"));
const AQI = React.lazy(() => import("./aqi"));

const Grid = (props) => {
  const components = {
    Cell: Cell,
    Aqi: AQI,
  };

  const { columns = [], data = [], name } = props;

  return (
    <table key={name}>
      <thead>
        <tr>
          <MemomizedGridCol columns={columns} />
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          return (
            <tr key={`${JSON.stringify(row)}-${index}`}>
              {columns.map((col, index) => {
                const Comp = components[col.componentType];
                return (
                  <td key={`${col.key}-${row[col.key]}`}>
                    <Suspense fallback={null}>
                      <Comp data={row[col.key]} />
                    </Suspense>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const GridColumn = ({ columns }) => {
  return columns.map((c) => <th key={c.label}>{c.label}</th>);
};

const MemomizedGridCol = React.memo(GridColumn, propsAreEqual);

export default Grid;
