import React from 'react';
import CounterButton from './CounterButton';

const CheckoutCard = ({ isModal = false }) => {
    return (
        <div className='checkout_card'>
            <div className="checkout_product___image">
                <img src="/assets/headphone_white2.png" alt="Product" />
            </div>
            <div className="checkout_product___details">
                <h3>XII Headphone</h3>
                <p>&#8377; 2,999</p>
            </div>
            <div className="checkout_product___action">
                {isModal ? <CounterButton /> : <h4>x2</h4>}
            </div>
        </div>
    )
}

export default CheckoutCard;