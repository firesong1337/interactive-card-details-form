import CardCvc from '../card-cvc/CardCvc';
import CardDate from '../card-date/CardDate';
import CardNumber from '../card-number/CardNumber';
import CardOwner from '../card-owner/CardOwner';
import './CardForm.css';
import {useState} from 'react';

const CardForm = ({info, setInfo}) => {
  const [isCardCvcValid, setIsCvcValid] = useState(false)
  const [isCardOwnerValid, setIsCardOwnerValid] = useState(false)
  const [isCardNumberValid, setIsCardNumberValid] = useState(false)
  const [isCardDateValid, setIsCardDateValid] = useState(false)

  console.log([isCardOwnerValid, isCardCvcValid, isCardNumberValid, isCardDateValid])
  const isBtnDisabled = isCardOwnerValid && isCardCvcValid && isCardNumberValid && isCardDateValid

    return(
      <form className="card-form">
        <section className="card-data-main">
          <CardOwner ownerinfo={info} setOwnerInfo={setInfo} setIsCardOwnerValid={setIsCardOwnerValid}/>
          <CardNumber cardnumberinfo={info} setCardInfo={setInfo} setIsCardNumberValid={setIsCardNumberValid}/>
        </section>
        <section className="card-data-common">
          <CardDate dateinfo={info} setDateInfo={setInfo} setIsCardDateValid={setIsCardDateValid}/>
          <CardCvc cvcinfo={info} setCvcInfo={setInfo} setIsCvcValid={setIsCvcValid}/>
        </section>
        <button 
          className="card-confirm-btn"
          //disabled={!isCvcValid}>
          disabled={!isBtnDisabled}>
          Confirm
          </button>
      </form>
    )
}

export default CardForm;