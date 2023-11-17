import CardCvc from './card-cvc/CardCvc';
import CardDate from './card-date/CardDate';
import CardNumber from './card-number/CardNumber';
import CardOwner from './card-owner/CardOwner';
import './CardForm.css';
import {useState} from 'react';

const CardForm = ({info, setInfo}) => {
  const [isCardCvcValid, setIsCvcValid] = useState(false)
  const [isCardOwnerValid, setIsCardOwnerValid] = useState(false)
  const [isCardNumberValid, setIsCardNumberValid] = useState(false)
  const [isCardDateValid, setIsCardDateValid] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)

  console.log([isCardOwnerValid, isCardCvcValid, isCardNumberValid, isCardDateValid])
  const isBtnDisabled = isCardOwnerValid && isCardCvcValid && isCardNumberValid && isCardDateValid
  const handleConfirmClick = () => {
    setSuccessMessage(true);
  };
  return (
    <form className="card-form">
      {successMessage ? (
        <div className="success-message">
          <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="url(#a)"/>
            <path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/>
            <defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse">
              <stop stop-color="#6348FE"/>
              <stop offset="1" stop-color="#610595"/>
              </linearGradient>
              </defs>
              </svg>
          <h1>THANK YOU!</h1>
          <span className="card-confirm-message">We've added your card details</span>
        </div>
      ) : (
        <>
          <section className="card-data-main">
            <CardOwner
              ownerinfo={info}
              setOwnerInfo={setInfo}
              setIsCardOwnerValid={setIsCardOwnerValid}
            />
            <CardNumber
              cardnumberinfo={info}
              setCardInfo={setInfo}
              setIsCardNumberValid={setIsCardNumberValid}
            />
          </section>
          <section className="card-data-common">
            <CardDate
              dateinfo={info}
              setDateInfo={setInfo}
              setIsCardDateValid={setIsCardDateValid}
            />
            <CardCvc
              cvcinfo={info}
              setCvcInfo={setInfo}
              setIsCvcValid={setIsCvcValid}
            />
          </section>
          <button
            className="card-confirm-btn"
            disabled={!isBtnDisabled}
            onClick={handleConfirmClick}
          >
            Confirm
          </button>
        </>
      )}
    </form>
  );
}

export default CardForm;