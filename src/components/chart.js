import React, { useState } from "react";
import { useEffect } from "react";
import { Sparklines, SparklinesLine, SparklinesBars } from "react-sparklines";

const Chart = ({ handleDialog, history, city }) => {
  const [chartData, setCharData] = useState(() => history.map((h) => h.aqi));

  useEffect(() => {
    const newData = [...history.map((h) => h.aqi)];
    setCharData(newData);

    return () => {
      setCharData([]);
    };
  }, [history]);

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleDialog}>
          &times;
        </span>
        <div>
          <div>
            <label>{city}</label>
          </div>
          <div>
            <Sparklines data={chartData} limit={5}>
              <SparklinesBars style={{ fill: "#41c3f9", fillOpacity: ".25" }} />
              <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
            </Sparklines>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
