import { useEffect, useRef, useState } from "react";
import {
  dateFormatter,
  formatDecimalNumber,
  initWebSocket,
} from "../utils/helperfunctions";

export const useSocket = (serverPath) => {
  const [stop, setStop] = useState(false);
  const [history, setHistory] = useState([]);
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  const webSocket = useRef(null);

  useEffect(() => {
    webSocket.current = initWebSocket(serverPath);
    webSocket.current.onopen = () => console.log("Connection is opened");
    webSocket.current.onclose = () => {
      console.log("Connection is closed");
      setStop(true);
    };
    return () => {
      webSocket.current.close();
    };
  }, [serverPath]);

  useEffect(() => {
    if (!webSocket.current) return;

    webSocket.current.onmessage = (res) => {
      if (stop) return;
      const list = JSON.parse(res.data);
      if (!loading) setLoading(false);
      setResponse((res) => getUpdatedData(res, list));
      setHistory((h) => [...h, ...list]);
    };
  }, [stop, loading]);

  return {
    loading,
    response,
    setStop,
    history,
  };
};

const getUpdatedData = (prevState, newState) => {
  if (prevState.length === 0) {
    return newState
      .map((obj) => ({
        ...obj,
        aqi: formatDecimalNumber(obj.aqi, 2),
        updatedOn: dateFormatter(new Date()),
      }))
      .sort((a, b) => (a.city > b.city ? 1 : b.city > a.city ? -1 : 0));
  }

  const result = [];
  prevState.forEach((element) => {
    const exists = newState.find((p) => p.city === element.city);
    if (exists !== undefined) {
      result.push({
        ...element,
        aqi: formatDecimalNumber(exists.aqi, 2),
        updatedOn: dateFormatter(new Date()),
      });
    } else result.push(element);
  });

  newState.forEach((obj) => {
    const exists = result.find((p) => p.city === obj.city);
    if (exists === undefined) {
      result.push({
        ...obj,
        aqi: formatDecimalNumber(obj.aqi, 2),
        updatedOn: dateFormatter(new Date()),
      });
    }
  });

  return result.sort((a, b) =>
    a.city > b.city ? 1 : b.city > a.city ? -1 : 0
  );
};
