import { useState } from "react"

const CardDate = ({dateinfo, setDateInfo, setIsCardDateValid}) => {
    const [isCardMonthValid, setIsMonthValid] = useState(true)
    const [isCardYearValid, setIsYearValid] = useState(true)
    const currentDate = new Date()
    const monthHandler = (e) => {
        if ((e.target.value.length <= 2) && (e.target.value <= 12) && e.target.value[0] !== '0') {
            setDateInfo(
            {...dateinfo, 
                expiryMonth: e.target.value})
            validateMonth(e)
        }
    }
    const yearHandler = (e) => {
        if (e.target.value.length <= 2) {
            setDateInfo(
            {...dateinfo, 
                expiryYear: e.target.value})
            validateYear(e)
        }
    }
    const validateMonth = (e) => {
        const isMonthValid = e.target.value > currentDate.getMonth()
        setIsMonthValid(isMonthValid)
    }

    const validateYear= (e) => {
        const isYearValid =  e.target.value >= currentDate.getFullYear() - 2000
        setIsYearValid(isYearValid)
    }
    setIsCardDateValid(isCardMonthValid && isCardYearValid)
    console.log([isCardMonthValid ,isCardYearValid])
    return(
        <label className="card-data-date">
                <span className="card-data-desc">EXP. DATE(MM/YY)</span>
            <div className="card-data-date-items">
                <input
                type="text"
                value={dateinfo.expiryMonth}
                onChange={monthHandler}
                placeholder="12"
                className="card-data-date-input"/>
                <input 
                type="text"
                value={dateinfo.expiryYear}
                onChange={yearHandler}
                placeholder="23"
                className="card-data-date-input"/>
                {(!isCardMonthValid || !isCardYearValid) && (
                <p className="error-message">Card Expired</p>
                )}
                
            </div>
            </label>
              
    )
}
export default CardDate;