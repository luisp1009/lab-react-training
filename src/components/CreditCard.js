import masterCard from "../assets/images/mastercard.png";
import visa from "../assets/images/visa.png";

function CreditCard ({type, number, expirationMonth, expirationYear, bank, owner}) {
  
    
    let cardTypeImage 
        if (type === "Visa"){
            cardTypeImage = visa
        } else if (type === "Master Card"){
            cardTypeImage = masterCard
        }
    let bullets = "• • • •  • • • •  • • • •"
   
    return (
        <div className="cards">
            <div className="cardDisplay">
                <p><img className="cardType" src={cardTypeImage} alt={type}/></p>           
                <p> <span>{bullets}</span>  {number.slice(-4)}</p>
                <p> Expires {expirationMonth}/{expirationYear} {bank}</p>
                <p> {owner}</p>
            </div>
        </div>
    )
}

export default CreditCard


