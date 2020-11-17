import React, { useEffect, useState } from "react";
import './InputComponent.scss';

function InputComponent({
  type,
  name,
  placeholder,
  label,
  error,
  value,
  handlechange,
  className
}) {
  return (
    <>
      <input
        name={name}
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        className={className || "input"}
        onChange = {handlechange}
      />
    </>
  );
}

export default InputComponent;
