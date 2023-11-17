import './Card.css'
const Card = ({info}) => {
    return(
        <div className="card-ui">
            <div className="card-ui-inner">
                <div className="card-ui-back">
                    <span>{info.cvc || '000'}</span>
                </div>
                <div className="card-ui-front">
                    <span className="card-ui-number">{info.cardNumber || '0000 0000 0000 0000'}</span>
                    <div className="card-ui-front-lower">
                        <span>{info.owner || 'John Doe'}</span>
                        <span>{info.expiryMonth || '00'}/{info.expiryYear || '00'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;