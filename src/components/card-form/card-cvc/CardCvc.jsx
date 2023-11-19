import React, { useState } from "react";
import './CardCvc.css'

const CardCvc = ({ cvcinfo, setCvcInfo, setIsCvcValid}) => {
  const [isCvcValid, setCvcValid] = useState(true);

  const cvcHandler = (e) => {
    if (/^\d{0,3}$/.test(e.target.value)) {
        const isValid = e.target.value.length === 3;
        setCvcValid(isValid);
        setIsCvcValid(isValid)
        setCvcInfo({ ...cvcinfo, cvc: e.target.value });
      }
    }
  return (
    <label className="card-data-cvc">
      <span className="card-data-desc">CVC</span>
      <input
        type="text"
        value={cvcinfo.cvc}
        onChange={cvcHandler}
        placeholder="e.g. 123"
        className={`card-data-cvc-input ${!isCvcValid ? "error-border" : ""}`}
      />
      {!isCvcValid && (
        <p className="error-message">Can't be blank</p>
      )}
    </label>
  );
};

export default CardCvc;
