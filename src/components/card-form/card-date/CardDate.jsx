import { useState } from "react"
import {useEffect} from "react"
import './CardDate.css'

const validateCardDate = (month, year) => {
    if(month === '' || year === '') return undefined
    const date = new Date(2000 + Number(year), Number(month) - 1, 2)
    console.log(date)
    const dateInitial = (new Date().setDate(1))
    console.log(dateInitial)
    const elapsed = date - dateInitial
    console.log(elapsed)
    return elapsed > 0
}
const CardDate = ({dateinfo, setDateInfo, setIsCardDateValid}) => {
    const [isCardMonthValid, setIsMonthValid] = useState(true)
    const [isCardYearValid, setIsYearValid] = useState(true)
    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')
    
    const monthHandler = (e) => {
        if ((e.target.value <= 12) && e.target.value[0] !== '0') {
            setDateInfo(
            {...dateinfo, 
                expiryMonth: e.target.value})
            setMonth(e.target.value)
            const isValid = validateCardDate(e.target.value, year)
            setIsMonthValid(isValid)  
        }
    }
    const yearHandler = (e) => {
            setDateInfo(
            {...dateinfo, 
                expiryYear: e.target.value})
            setYear(e.target.value)
            const isValid = validateCardDate(month, e.target.value)
            setIsYearValid(isValid)
    }
    setIsCardDateValid(isCardMonthValid && isCardYearValid)
    return(
        <label className="card-data-date">
            <span className="card-data-desc">EXP. DATE(MM/YY)</span>
            <div className="card-data-date-items">
                <input
                type="text"
                value={dateinfo.expiryMonth}
                onChange={monthHandler}
                placeholder="MM"
                maxLength="2"
                className="card-data-date-input"/>
                <input 
                type="text"
                value={dateinfo.expiryYear}
                onChange={yearHandler}
                placeholder="YY"
                maxLength="2"
                className="card-data-date-input"/>
            </div>
            {(!isCardMonthValid && !isCardYearValid) && (
                <p className="error-message">Card Expired</p>
                )}
        </label>
              
    )
}
export default CardDate;