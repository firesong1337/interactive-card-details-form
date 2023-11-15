import { useState } from "react";

const CardNumber = ({ cardnumberinfo, setCardInfo, setIsCardNumberValid }) => {
  const [isCardValid, setIsCardValid] = useState(true);

  const cardNumberHandler = (e) => {
    if (e.target.value.length <= 19) {
        const formattedValue = formatCardNumber(e.target.value);
        setCardInfo({
          ...cardnumberinfo,
          cardNumber: formattedValue,
        });
        validateCardNumber(formattedValue);
      }
      
      setIsCardNumberValid(isCardValid)
  };
  const validateCardNumber = (value) => {
    const validate = /^\d{16}$/;
    const isValid = validate.test(value.replace(/\s/g, ""));
    setIsCardValid(isValid || value === "");
  };

  const formatCardNumber = (value) => {
    const unformattedValue = value.replace(/\s/g, "");
    const formattedValue = unformattedValue.replace(/(\d{4})/g, "$1 ");
    return formattedValue.trim();
  };

  return (
    <label className="card-data-item">
      <p>CARD NUMBER</p>
      <input
        type="text"
        value={cardnumberinfo.cardNumber}
        onChange={cardNumberHandler}
        placeholder="1234 5678 9012 3456"
      />
      {!isCardValid && (
        <p className="error-message">Неверный формат. Введите 16 цифр.</p>
      )}
    </label>
  );
};

export default CardNumber;