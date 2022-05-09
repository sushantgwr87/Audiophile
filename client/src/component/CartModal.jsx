import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import useMountTransition from "../customHook/useMountTransition";
import styles from "../styles/modal.module.css";
import CheckoutCard from "./CheckoutCard";
import useLocalStorage from "../customHook/useLocalStorage";
import useCartPrice from "../customHook/useCartPrice";

const CartModal = ({ show, onClose }) => {

  const hasTransitionedIn = useMountTransition(show, 1000);
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  const [cartList, setCartList] = useLocalStorage("cart", [])
  // console.log(cartList)

  const totalPrice = useCartPrice();
  // const [totalPrice, setTotalPrice] = useLocalStorage("totalCartPrice", cartList ? cartList.reduce((sum, val) => sum + val.price*val.quantity, 0) : 0)

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
      // setTotalPrice(cartList ? cartList.reduce((sum, val) => sum + val.price, 0) : 0)
    }
    if (cartList && cartList.length > 0)
      setIsCartEmpty(false)
  }, [show]);

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
    // localStorage.removeItem("cart");
    setIsCartEmpty(true)
    setCartList([]);
  }

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
        {isCartEmpty ? cartEmpty : cartFilled}
      </div>
    </div>
  ) : null

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal")
  );
};

export default CartModal;