import React from "react";
import Aqi from "../components/aqi";

const CompareDialog = ({ handleDialog, gridData, selectedCity }) => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleDialog}>
          &times;
        </span>
        <div>
          <table>
            <thead>
              {selectedCity.map((c) => (
                <th>{c}</th>
              ))}
            </thead>
            <tbody>
              <tr>
                {selectedCity.map((c) => (
                  <td>
                    <Aqi data={gridData.find((obj) => obj.city === c).aqi} />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompareDialog;
