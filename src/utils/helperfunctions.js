export const dateFormatter = (currentdate) => {
  const datestr =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  const ampm = currentdate.getHours() > 12 ? "PM" : "AM";
  return datestr + " " + ampm;
};

export const propsAreEqual = (prevProps, nextProps) =>
  JSON.stringify(prevProps) === JSON.stringify(nextProps);

export const initWebSocket = (url) => new WebSocket(url);

export const formatDecimalNumber = (num, decimal) =>
  (Math.round(num * 100) / 100).toFixed(decimal);
