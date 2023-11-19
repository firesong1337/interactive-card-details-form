import { useState } from "react";

const CardNumber = ({ cardnumberinfo, setCardInfo, setIsCardNumberValid }) => {
  const [isCardValid, setIsCardValid] = useState(true);

  const cardNumberHandler = (e) => {
    const inputValue = e.target.value;
    const formattedValue = formatCardNumber(inputValue);
    setCardInfo({
      ...cardnumberinfo,
      cardNumber: formattedValue,
    });
    validateCardNumber(formattedValue);
  };

  const validateCardNumber = (value) => {
    const validate = /^\d{16}$/;
    const isValid = validate.test(value.replace(/\s/g, ""));
    setIsCardValid(isValid);
    setIsCardNumberValid(isValid);
  };

  const formatCardNumber = (value) => {
    const formattedValue = value.replace(/\D/g, "");
    const groupedValue = formattedValue.replace(/(\d{4})/g, "$1 ").trim();
    return groupedValue;
  };

  return (
    <label className="card-data-item">
      <span className="card-data-desc">CARD NUMBER</span>
      <input
        type="text"
        value={cardnumberinfo.cardNumber}
        onChange={cardNumberHandler}
        placeholder="e.g. 1234 5678 9012 3456"
        maxLength="19"
        className={`card-data-main-input ${!isCardValid ? "error-border" : ""}`}
      />
      {!isCardValid && (
        <p className="error-message">Can't be empty. Enter 16 numbers</p>
      )}
    </label>
  );
};

export default CardNumber;
