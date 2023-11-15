import React, { useState } from "react";

const CardCvc = ({ cvcinfo, setCvcInfo, setIsCvcValid}) => {
  const [isCvcValid, setCvcValid] = useState(true);

  const cvcHandler = (e) => {
    if (/^\d{0,3}$/.test(e.target.value)) {
        const isValid = e.target.value.length === 3 || e.target.value === "";
        setCvcValid(isValid);
        setIsCvcValid(isValid)
        setCvcInfo({ ...cvcinfo, cvc: e.target.value });
      }
    }
  return (
    <label>
      <p>CVC</p>
      <input
        type="text"
        value={cvcinfo.cvc}
        onChange={cvcHandler}
        placeholder="123"
      />
      {!isCvcValid && (
        <p className="error-message">Обязательно для заполнения и должно содержать 3 цифры.</p>
      )}
    </label>
  );
};

export default CardCvc;