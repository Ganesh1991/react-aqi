import React from "react";
import { formatDecimalNumber } from "../utils/helperfunctions";

const Aqi = ({ data }) => {
  let aqiComp = "";
  const value = formatDecimalNumber(data, 0);
  switch (true) {
    case value >= 0 && value <= 50:
      aqiComp = <span className="good">{data}</span>;
      break;
    case value >= 51 && value <= 100:
      aqiComp = <span className="satisfactory">{data}</span>;
      break;
    case value >= 101 && value <= 200:
      aqiComp = <span className="moderate">{data}</span>;
      break;
    case value >= 201 && value <= 300:
      aqiComp = <span className="poor">{data}</span>;
      break;
    case value >= 301 && value <= 400:
      aqiComp = <span className="verypoor">{data}</span>;
      break;
    case value >= 401 && value <= 500:
      aqiComp = <span className="severe">{data}</span>;
      break;
    default:
      aqiComp = <span>{data}</span>;
      break;
  }
  return aqiComp;
};

const MemomizedAQI = React.memo(Aqi);

export default MemomizedAQI;
