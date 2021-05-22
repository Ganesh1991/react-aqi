import React, { useState } from "react";
import Chart from "../components/chart";
import Grid from "../components/grid";
import { useSocket } from "../hooks/useSocket";
import { gridColumnProps, SOCKET_ENDPOINT } from "../utils/constants";
import CompareDialog from "./customCompare";

const Dashboard = () => {
  const { response, loading, setStop, history } = useSocket(SOCKET_ENDPOINT);
  const [open, setOpen] = useState(false);
  const [viewChart, setViewChart] = useState("");
  const [chkData, setChkData] = useState([]);

  const handleChk = (event) => {
    const chkArr = [...chkData];
    const name = event.target.name;
    const checked = event.target.checked;
    if (checked) {
      chkArr.push(name);
    } else {
      var index = chkArr.indexOf(name);
      if (index !== -1) {
        chkArr.splice(index, 1);
      }
    }
    setChkData([...chkArr]);
  };

  const handleClose = () => {
    setOpen(false);
    setStop(false);
  };

  const closeChartDialog = () => setViewChart("");

  const displayChart = (city) => {
    console.log(city);
    setViewChart(city);
  };

  const handleCompareBtnClick = () => {
    if (chkData.length >= 2) {
      setOpen(true);
      setStop(true);
    } else alert("Please select 2 or more City to view compare mode");
  };

  const actionHandlers = {
    CheckBox: handleChk,
    Button: displayChart,
  };

  const gridData = formatGridData(chkData, response);

  return (
    <>
      <div className="container control-section">
        <button className="primaryBtn" onClick={handleCompareBtnClick}>
          Compare City AQI
        </button>
      </div>
      <div className="container">
        <div className="item">
          {loading && <div>Loading data....</div>}
          {!loading && (
            <Grid
              columns={gridColumnProps}
              data={gridData}
              name="aqiGrid"
              actionHandlers={actionHandlers}
            />
          )}
        </div>
      </div>
      {open && (
        <CompareDialog
          handleDialog={handleClose}
          gridData={gridData}
          selectedCity={chkData}
        />
      )}
      {viewChart && (
        <Chart
          handleDialog={closeChartDialog}
          history={getCityData(viewChart, history)}
          city={viewChart}
        />
      )}
    </>
  );
};

const formatGridData = (checkedRow, data) => {
  if (checkedRow.length > 0) {
    return data.map((obj) => ({
      ...obj,
      isChecked: checkedRow.indexOf(obj.city) !== -1 ? true : false,
    }));
  } else {
    return data.map((obj) => ({ ...obj, isChecked: false }));
  }
};

const getCityData = (city, griData) => {
  return griData.filter((p) => p.city === city);
};

export default Dashboard;
