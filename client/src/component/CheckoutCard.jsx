import { useState } from 'react';
import CounterButton from './CounterButton';
import styles from '../styles/checkoutCard.module.css'

const CheckoutCard = ({ productId, isModal = false, imagePath, productName, productPrice = null, productQuantity, cartUpdate }) => {

    const [countValue, setCountValue] = useState(productQuantity);

    const handleCounterValue = (value) => {
        setCountValue(value);
        cartUpdate && cartUpdate(productId, value);
    }

    return (
        <div className={styles.checkout_card}>
            <div className={styles.checkout_product___image}>
                <img src={process.env.REACT_APP_PUBLIC_API_URL + imagePath} alt="Product" />
            </div>
            <div className={styles.checkout_product___details}>
                <h3>{productName}</h3>
                <p>&#8377; {productPrice.toLocaleString()}</p>
            </div>
            <div className={styles.checkout_product___action}>
                {isModal ? <CounterButton handleCallback={handleCounterValue} quantity={countValue} /> : <h4>x{productQuantity}</h4>}
            </div>
        </div>
    )
}

export default CheckoutCard;