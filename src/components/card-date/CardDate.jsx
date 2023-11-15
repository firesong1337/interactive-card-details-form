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
        <label className="card-data-dateitem">
            <p>EXP.DATE (MM/YY)</p>
              <input
              type="text"
              value={dateinfo.expiryMonth}
              onChange={monthHandler}
              placeholder="12"/>
              <input 
              type="text"
              value={dateinfo.expiryYear}
              onChange={yearHandler}
              placeholder="23"/>
              {(!isCardMonthValid || !isCardYearValid) && (
            <p className="error-message">Card Expired</p>
            )}
          </label>
    )
}
export default CardDate;