import React from 'react';
import styles from '../styles/card.module.css';
import { Link } from 'react-router-dom';

const Card = ({ imagePath, cardQuote, cardHead, cardBody, buttonText, productPrice, isbutton = true, isProduct = false, isreverse = false }) => {

    return (
        <div className={`${styles.card} ${isreverse && styles.card___reverse}`}>
            <div className={styles.card_photo}>
                <img src={imagePath} alt='CardImage' />
            </div>
            <div className={styles.card_content}>
                <h5>{cardQuote}</h5>
                <h3>{cardHead}</h3>
                <p>{cardBody}</p>
                {isbutton && (
                    <Link to="/">
                        <button className={styles.card_btn}>
                            {buttonText}
                        </button>
                    </Link>
                )}
                {isProduct && (
                    <>
                        <p>{productPrice}</p>
                        <div className={styles.card_product}>
                            <div className={styles.card_cart_counter}>
                                <button>-</button>
                                <span>1 Count</span>
                                <button>+</button>
                            </div>
                            <button className={styles.card_btn}>
                                {buttonText}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Card;