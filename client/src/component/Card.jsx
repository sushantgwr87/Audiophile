import { useState } from 'react';
import styles from '../styles/card.module.css';
import { Link } from 'react-router-dom';
import CounterButton from './CounterButton';

const Card = ({
    imagePath = null,
    cardQuote = null,
    cardHead = null,
    cardBody = null,
    buttonText = null,
    productPrice = null,
    isbutton = false,
    isProduct = false,
    isreverse = false,
    buttonLink = null,
    cartFunction
}) => {

    const [countValue, setCountValue] = useState(1);

    const handleCounterValue = (value) => {
        setCountValue(value);
    }

    const handleCart = () => {
        cartFunction && cartFunction(countValue);
    }

    return (
        <div className={`${styles.card} ${isreverse && styles.card___reverse}`}>
            {imagePath &&
                <div className={styles.card_photo}>
                    <img src={process.env.REACT_APP_PUBLIC_API_URL + imagePath} alt='CardImage' />
                </div>
            }
            <div className={styles.card_content}>
                {cardQuote && <h5>{cardQuote}</h5>}
                {cardHead && <h3>{cardHead}</h3>}
                {cardBody && <p>{cardBody}</p>}
                {isbutton && (
                    <Link to={buttonLink}>
                        <button className={styles.card_btn}>
                            {buttonText}
                        </button>
                    </Link>
                )}
                {isProduct && (
                    <>
                        {productPrice && <h4>&#8377; {productPrice.toLocaleString()}</h4>}
                        <div className={styles.card_product}>
                            <CounterButton handleCallback={handleCounterValue} />
                            <button className={styles.card_btn} onClick={handleCart}>
                                {countValue===0? "Remove from Cart" : "Add to Cart"}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Card;