import React from "react";

const CheckBox = ({ isChecked, name, handleChange }) => {
  return (
    <input
      key={name}
      type="checkbox"
      name={name}
      checked={isChecked}
      onChange={handleChange}
    />
  );
};

export default CheckBox;
