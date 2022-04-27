import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutCard from '../component/CheckoutCard';

const Checkout = () => {
  return (
    <div className='checkout_page'>
      <Link to={"/"}>Go Back</Link>
      <div className="checkout_form">
        <h2>Checkout</h2>
        <form method="post">
          <div className="form___billing_details">
            <h4>Billing Details</h4>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email Address</label>
            <input type="email" name='email' id='email' />
            <label htmlFor="phone">Phone No.</label>
            <input type="number" name='phone' id='phone' />
          </div>
          <div className="form___shipping_details">
            <h4>Shipping Details</h4>
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" />
            <label htmlFor="zip">Zip Postel Code</label>
            <input type="number" name='zip' id='zip' />
            <label htmlFor="city">City</label>
            <input type="text" name='city' id='city' />
            <label htmlFor="country">Country</label>
            <input type="text" name='country' id='country' />
          </div>
          <div className="form___payment_details">
            <h4>Payment Details</h4>
            <label htmlFor="payment_type">Payment Type</label>
            <input required type="radio" name="payment_type" value="e-Money" id="payment_type" />
            <label htmlFor="emoney">e-Money</label>
            <input required type="radio" value="Cash on Delivery" name="payment_type" id="payment_type" />
            <label htmlFor="cash">Cash on Delivery</label>
          </div>
        </form>
      </div>
      {/* <div className="checkout_summary">
        <h2>Summary</h2>
        <div className="summary_cards">
          <CheckoutCard />
          <CheckoutCard />
          <CheckoutCard />
        </div>
        <div className="summary_details">
          <div className="summary_headings">
            <h3>Total</h3>
            <h3>Shipping</h3>
            <h3>Vat Included</h3>
            <h3>Grand Total</h3>
          </div>
          <div className="summary_values">
            <h3>&#8377; 2,999</h3>
            <h3>&#8377; 50</h3>
            <h3>&#8377; 1045</h3>
            <h3>&#8377; 50090</h3>
          </div>
        </div>
        <button>Continue and Pay</button>
      </div> */}
    </div>
  )
}

export default Checkout