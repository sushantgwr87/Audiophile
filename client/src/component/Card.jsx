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
}) => {

    const [countValue,setCountValue] = useState(1);

    const handleCounterValue = (value) => {
        setCountValue(value)
    }

    console.log(countValue)

    return (
        <div className={`${styles.card} ${isreverse && styles.card___reverse}`}>
            {imagePath &&
                <div className={styles.card_photo}>
                    <img src={imagePath} alt='CardImage' />
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
                            <button className={styles.card_btn}>
                                Add To Cart
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Card;