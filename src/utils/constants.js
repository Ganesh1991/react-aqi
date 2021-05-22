export const SOCKET_ENDPOINT = process.env.REACT_APP_SOCKET_ENDPOINT;

export const gridDefaultColumns = ["CITY", "AQI", "LAST UPDATED"];

export const gridColumnProps = [
  {
    label: "",
    key: "isChecked",
    componentType: "CheckBox",
    compProps: {
      name: "city",
      handleChange: function (props) {
        console.log(props);
      },
    },
    isActionHandler: true,
  },
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
  {
    label: "",
    key: "viewHistory",
    componentType: "Button",
    compProps: {
      name: "city",
      handleChange: function (props) {
        console.log(props);
      },
    },
    isActionHandler: true,
  },
];
