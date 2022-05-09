import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CheckoutCard from '../component/CheckoutCard';
import useLocalStorage from '../customHook/useLocalStorage';
import useCartPrice from '../customHook/useCartPrice';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

  const navigate = useNavigate();

  const [cart, setCart] = useLocalStorage("cart", []);
  const totalPrice = useCartPrice()
  
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  });

  const vatPrice = 1045;
  const shippingPrice = 50;

  const [check, setCheck] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentType: "e-Money"
  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const { name, email, phone, address, zip, city, country } = formData;

  const handleRadioCheck = (e) => {
    setCheck(!check);
    formData.paymentType = e.target.value;
  }

  const handleFormSubmit = (e) => {
    e.prevent.default();
    console.log(formData);
  }

  if(cart===null || cart.length===0) {
    navigate("/")
  }

  return (
    <div className='checkout_page'>
      <Link to={"/"}>Go Back</Link>
      <div className='checkout_grid_container'>
        <div className="checkout_form">
          <h2>Checkout</h2>
          <form method="post" onSubmit={handleFormSubmit}>
            <h4>Billing Details</h4>
            <div className="form___billing_details">
              <div className='form_input___name'>
                <label htmlFor="name">Name</label>
                <input required type="text" name="name" id="name" value={name} onChange={handleInputChange} />
              </div>
              <div className='form_input___email'>
                <label htmlFor="email">Email Address</label>
                <input required type="email" name='email' id='email' value={email} onChange={handleInputChange} />
              </div>
              <div className='form_input___phone'>
                <label htmlFor="phone">Phone No.</label>
                <input required type="number" name='phone' id='phone' value={phone} onChange={handleInputChange} />
              </div>
            </div>
            <h4>Shipping Details</h4>
            <div className="form___shipping_details">
              <div className='form_input___address'>
                <label htmlFor="address">Address</label>
                <input required type="text" name="address" id="address" value={address} onChange={handleInputChange} />
              </div>
              <div className='form_input___zip'>
                <label htmlFor="zip">Zip Postel Code</label>
                <input required type="number" name='zip' id='zip' value={zip} onChange={handleInputChange} />
              </div>
              <div className='form_input___city'>
                <label htmlFor="city">City</label>
                <input required type="text" name='city' id='city' value={city} onChange={handleInputChange} />
              </div>
              <div className='form_input___country'>
                <label htmlFor="country">Country</label>
                <input required type="text" name='country' id='country' value={country} onChange={handleInputChange} />
              </div>
            </div>
            <h4>Payment Details</h4>
            <div className="form___payment_details">
              <h5>Payment Type</h5>
              <label htmlFor="e-Money" className={`form___input_radio ${check && "input_radio___checked"}`}>
                <input required defaultChecked type="radio" name="payment_type" value="e-Money" id="e-Money" onChange={handleRadioCheck} />
                <label htmlFor="e-Money">e-Money</label>
              </label>
              <label htmlFor="cashOnDelivery" className={`form___input_radio ${!check && "input_radio___checked"}`}>
                <input required type="radio" value="Cash on Delivery" name="payment_type" id="cashOnDelivery" onChange={handleRadioCheck} />
                <label htmlFor="cashOnDelivery">Cash on Delivery</label>
              </label>
            </div>
          </form>
        </div>
        <div className="checkout_summary">
          <h2>Summary</h2>
          <div className="summary_cards">
            {cart.map((value, index) =>
              <CheckoutCard
                key={value._id}
                imagePath={value.path}
                productName={value.head}
                productPrice={value.price}
                productQuantity={value.quantity}
              />
            )}
          </div>
          <div className="summary_details">
            <div className="summary_headings">
              <h3>Total</h3>
              <h3>Shipping</h3>
              <h3>Vat Included</h3>
              <h3>Grand Total</h3>
            </div>
            <div className="summary_values">
              <h3>&#8377; {totalPrice}</h3>
              <h3>&#8377; {shippingPrice}</h3>
              <h3>&#8377; {vatPrice}</h3>
              <h3>&#8377; {vatPrice + shippingPrice + totalPrice}</h3>
            </div>
          </div>
          <button>Continue and Pay</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout