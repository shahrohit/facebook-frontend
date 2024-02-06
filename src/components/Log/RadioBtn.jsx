import React from "react";
import Input from "./Input";

const RadioBtn = ({ name, value, handleUser }) => {
  return (
    <div>
      <p className="inputLabel">Gender</p>
      <div className="formRadio">
        <div className="formRadioBox">
          <p>Male</p>
          <input
            type="radio"
            name={name}
            value="Male"
            checked={value === "Male"}
            onChange={handleUser}
          />
        </div>
        <div className="formRadioBox" style={{ margin: "0 5px" }}>
          <p>Female</p>
          <input
            type="radio"
            name={name}
            value="Female"
            checked={value === "Female"}
            onChange={handleUser}
          />
        </div>
        <div className="formRadioBox">
          <p>Others</p>
          <input
            type="radio"
            name={name}
            value="Others"
            checked={value === "Others"}
            onChange={handleUser}
          />
        </div>
      </div>
    </div>
  );
};

export default RadioBtn;
