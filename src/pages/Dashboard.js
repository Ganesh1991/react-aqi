import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Grid from "../components/grid";
import { useSocket } from "../hooks/useSocket";
import { gridColumnProps, SOCKET_ENDPOINT } from "../utils/constants";
import CompareModal from "./Compare";

const Dashboard = () => {
  const { response, loading, setStop } = useSocket(SOCKET_ENDPOINT);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setStop(false);
  };

  return (
    <>
      <div className="container control-section">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setOpen(true);
            setStop(true);
          }}
        >
          Compare City AQI
        </Button>
      </div>
      <div className="container">
        <div className="item">
          {loading && <div>Loading data....</div>}
          {!loading && (
            <Grid columns={gridColumnProps} data={response} name="aqiGrid" />
          )}
        </div>
      </div>
      {open && (
        <CompareModal data={response} open={open} handleClose={handleClose} />
      )}
    </>
  );
};

export default Dashboard;
