export const SOCKET_ENDPOINT = process.env.REACT_APP_SOCKET_ENDPOINT;

export const gridDefaultColumns = ["CITY", "AQI", "LAST UPDATED"];

export const gridColumnProps = [
  {
    label: "CITY",
    key: "city",
    componentType: "Cell",
  },
  {
    label: "AIR QUALITY INDEX",
    key: "aqi",
    componentType: "Aqi",
  },
  {
    label: "LAST UPDATED",
    key: "updatedOn",
    componentType: "Cell",
  },
];
