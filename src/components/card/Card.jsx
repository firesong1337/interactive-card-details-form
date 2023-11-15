import './Card.css'
const Card = ({info}) => {
    return(
        <div className="card-ui">
            <h2>{info.owner}</h2>
            <h2>{info.cardNumber}</h2>
            <h2>{info.expiryMonth}/{info.expiryYear}</h2>
            <h2>{info.cvc}</h2>
        </div>
    )
}

export default Card;