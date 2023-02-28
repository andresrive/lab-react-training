import visa from '../assets/images/visa.png'
import masterCard from '../assets/images/master-card.svg'

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

    return (
        <div className='w-50 mx-auto' style={{ backgroundColor: bgColor, color: color }}>
            <div>
                {type === "Visa" ? <img className='imagen' src={visa} alt="visa" /> : <img src={masterCard} className="imagen" alt="masterCard" />}
            </div>
            <div>
                {number}
            </div>
            <div>
                <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
                <p>{owner}</p>
            </div>
        </div>
    )
}

export default CreditCard