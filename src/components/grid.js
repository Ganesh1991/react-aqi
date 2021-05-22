import React, { Suspense } from "react";
import { propsAreEqual } from "../utils/helperfunctions";

const Cell = React.lazy(() => import("./cell"));
const AQI = React.lazy(() => import("./aqi"));
const Chk = React.lazy(() => import("./checkbox"));

const Button = ({ handleChange, name }) => {
  return (
    <button key={`hisotryBtn-${name}`} onClick={() => handleChange(name)}>
      View Live
    </button>
  );
};

const Grid = (props) => {
  const components = {
    Cell: Cell,
    Aqi: AQI,
    CheckBox: Chk,
    Button: Button,
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
            <tr>
              {columns.map((col, index) => {
                const Comp = components[col.componentType];
                const otherProps = {};
                if (col.isActionHandler) {
                  otherProps.name = row[col.compProps.name];
                  otherProps.isChecked = row[col.key];
                  otherProps.handleChange =
                    props.actionHandlers[col.componentType];
                }
                return (
                  <td
                    key={`${col.key}-${row[col.key]}-col-${index}-td-${index}`}
                  >
                    <Suspense fallback={null}>
                      {!col.isActionHandler && <Comp data={row[col.key]} />}
                      {col.isActionHandler && <Comp {...otherProps} />}
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
  return columns.map((c, index) => (
    <th key={`col-${index}-${c.label}`}>{c.label}</th>
  ));
};

const MemomizedGridCol = React.memo(GridColumn, propsAreEqual);

export default Grid;
