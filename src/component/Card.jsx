import React from 'react';
import styles from '../styles/card.module.css';
import { Link } from 'react-router-dom';

const Card = ({ imagePath, cardQuote, cardHead, cardBody, isModal = false, isbutton = true, isdark = true, isreverse = false, buttonText }) => {

    return (
        <div className={`${styles.card} ${isdark ? styles.card___dark : styles.card___light} ${isreverse && styles.card___reverse}`}>
            <div className={styles.card_photo}>
                <img src={imagePath} alt='CardImage' />
            </div>
            <div className={styles.card_content}>
                <h5>{cardQuote}</h5>
                <h3>{cardHead}</h3>
                <p>{cardBody}</p>
                {isbutton && (isModal ? (
                    <button className={styles.card_btn}>
                        {buttonText}
                    </button>
                ) :
                    <Link to="/">
                        <button className={styles.card_btn}>
                            {buttonText}
                        </button>
                    </Link>
                )
                }
            </div>
        </div>
    );
};

export default Card;