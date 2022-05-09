import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import useMountTransition from "../customHook/useMountTransition";
import styles from "../styles/modal.module.css";
import CheckoutCard from "./CheckoutCard";
import useLocalStorage from "../customHook/useLocalStorage";
import useCartPrice from "../customHook/useCartPrice";

const CartModal = ({ show, onClose, isPaymentModal = false, addressCity = null }) => {

  const hasTransitionedIn = useMountTransition(show, 1000);
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  const [cartList, setCartList] = useLocalStorage("cart", [])

  const totalPrice = useCartPrice();

  const updateCart = (id, productQuantity) => {
    let cartArray = cartList
    let productIndex = cartArray.findIndex(val => val._id === id);
    if (productQuantity > 0) {
      cartArray[productIndex].quantity = productQuantity;
      setCartList(cartArray);
    }
    else if (productQuantity === 0 && productIndex === -1) {
      cartArray = cartList.filter(val => val._id !== id);
      setCartList(cartList.filter(val => val._id !== id));
    }
  }

  const clearCart = () => {
    console.log("cleared")
    setIsCartEmpty(true)
    setCartList([]);
  }

  useEffect(() => {
    const closeOnEscapeKeyDown = e => {
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    };
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return () => document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCartList(JSON.parse(localStorage.getItem("cart")));
    }
    if (cartList && cartList.length > 0)
      setIsCartEmpty(false)
    else if (cartList && cartList.length === 0)
      setIsCartEmpty(true)
  }, [show, cartList]);

  const paymentModal = (
    <div className={styles.modal___payment_modal}>
      <h2>Thank you for your order</h2>
      <p>Your order will be shipped to your city {addressCity}</p>
      <div className={styles.payment_card}>
        <div className={styles.payment_card___items}>
          <h3>Total Items</h3>
          <h4>{cartList.length}</h4>
        </div>
        <div className={styles.payment_card___price}>
          <h3>Grand Total</h3>
          <h4>&#8377; {totalPrice}</h4>
        </div>
      </div>
      <Link to={"/"}>Back to Home</Link>
    </div>
  )

  const cartEmpty = (
    <div className={styles.modal___cart_empty}>
      <h3>Cart</h3>
      <h2>Cart is Empty</h2>
    </div>
  )

  const cartFilled = (
    <>
      <div className={styles.modal_header}>
        <h3>Cart - <span>{cartList && cartList.length}</span></h3>
        <button onClick={clearCart}>Remove All</button>
      </div>
      <div className={styles.modal_body}>
        {cartList && cartList.map((value, index) =>
          <CheckoutCard
            isModal
            key={value._id}
            productId={value._id}
            imagePath={value.path}
            productName={value.title}
            productPrice={value.price}
            productQuantity={value.quantity}
            cartUpdate={updateCart}
          />
        )}
      </div>
      <div className={styles.modal_footer}>
        <div className={styles.modal_footer___total_bill}>
          <h3>Total</h3>
          <h4>&#8377; {totalPrice}</h4>
        </div>
        <Link to={"/checkout"} onClick={onClose}>Continue to Payout</Link>
      </div>
    </>
  )

  const modalContent = hasTransitionedIn || show ? (
    <div className={`${styles.modal_overlay} ${hasTransitionedIn && show ? styles.modal_show : styles.modal_hide}`} onClick={onClose}>
      <div className={`${styles.modal} ${hasTransitionedIn && show ? styles.modal_show : styles.modal_hide}`} onClick={e => e.stopPropagation()}>
        {isPaymentModal ? paymentModal : (
          isCartEmpty ? cartEmpty : cartFilled
        )}
      </div>
    </div>
  ) : null

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal")
  );
};

export default CartModal;