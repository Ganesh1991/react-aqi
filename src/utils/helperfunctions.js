export const dateFormatter = (currentdate) => {
  return currentdate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

// const getDifferenceInMinutes = (date1, date2) => {
//   const diffInMs = Math.abs(date2 - date1);
//   return diffInMs / (1000 * 60);
// };

// const getDifferenceInSeconds = (date1, date2) => {
//   const diffInMs = Math.abs(date2 - date1);
//   return diffInMs / 1000;
// };

export const propsAreEqual = (prevProps, nextProps) =>
  JSON.stringify(prevProps) === JSON.stringify(nextProps);

export const initWebSocket = (url) => new WebSocket(url);

export const formatDecimalNumber = (num, decimal) =>
  (Math.round(num * 100) / 100).toFixed(decimal);
