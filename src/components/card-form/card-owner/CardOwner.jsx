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
        setIsOwnerValid(isValid);
    }
    
    return (
        <label className="card-data-item">
            <span className="card-data-desc">CARDHOLDER NAME</span>
            <input type="text"
            value={ownerinfo.owner}
            onChange={ownerHandler}
            placeholder="e.g. Joseph Joestar"
            className={`card-data-main-input ${!isOwnerValid ? "error-border" : ""}`}
            />
          {!isOwnerValid && (
            <p className="error-message">Cant't be empty. Requires Firstname and Lastname</p>
            )}
        </label>
      )
}

export default CardOwner;