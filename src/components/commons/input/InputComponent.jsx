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
  handlekeyup,
  className,
  ref
}) {
  return (
    <>
      <input
        ref={ref}
        name={name}
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        className={className || "input"}
        onChange = {handlechange}
        autoComplete='off'
        onKeyUp = {handlekeyup}
    />
    </>
  );
}

export default InputComponent;
