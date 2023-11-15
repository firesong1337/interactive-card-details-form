import { useState } from "react";

const CardOwner = ({ownerinfo, setOwnerInfo, setIsCardOwnerValid}) => {
    const [isOwnerValid, setIsOwnerValid] = useState(true);

    const ownerHandler = (e) => {
        setOwnerInfo(
        {...ownerinfo, 
        owner: e.target.value})
        setIsCardOwnerValid(isOwnerValid)    
        validateOwner(e)
    }
    const validateOwner = (e) => {
        const validate = /^([A-Za-z]{2,})\s([A-Za-z]{2,})$/;
        const isValid = validate.test(e.target.value);
        setIsOwnerValid(isValid || e.target.value === "");
    }
    
    return (
        <label className="card-data-item">
            <p>CARDHOLDER NAME</p>
            <input type="text"
            value={ownerinfo.owner}
            onChange={ownerHandler}
            placeholder="John Doe"
            />
          {!isOwnerValid && (
            <p className="error-message">Неверный формат.</p>
            )}
        </label>
      )
}

export default CardOwner;