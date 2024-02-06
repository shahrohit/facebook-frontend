import React from "react";

const Input = ({ type, name, placeholder, value, handleUser }) => {
  return (
    <div className="formInput">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleUser}
      />
    </div>
  );
};

export default Input;
