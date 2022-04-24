import { useState } from 'react';
import styles from '../styles/card.module.css';
import { Link } from 'react-router-dom';

const Card = ({
    imagePath = null,
    cardQuote = null,
    cardHead = null,
    cardBody = null,
    buttonText = null,
    productPrice = null,
    isbutton = false,
    isProduct = false,
    isreverse = false
}) => {

    const [count, setCount] = useState(1);

    const handleDecrement = () => {
        if (count === 0)
            return;
        setCount(count - 1);
    }
    const handleIncrement = () => {
        setCount(count + 1);
    }

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
                    <Link to="/">
                        <button className={styles.card_btn}>
                            {buttonText}
                        </button>
                    </Link>
                )}
                {isProduct && (
                    <>
                        <h4>&#8377; {productPrice.toLocaleString()}</h4>
                        <div className={styles.card_product}>
                            <div className={styles.card_cart_counter}>
                                <button onClick={handleDecrement}>-</button>
                                <span>{count}</span>
                                <button onClick={handleIncrement}>+</button>
                            </div>
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