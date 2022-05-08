import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import useMountTransition from "../customHook/useMountTransition";
import styles from "../styles/modal.module.css";
import CheckoutCard from "./CheckoutCard";
import useLocalStorage from "../customHook/useLocalStorage";

const CartModal = ({ show, onClose }) => {

  const hasTransitionedIn = useMountTransition(show, 1000);

  const [cartList, setCartList] = useLocalStorage("cart", [])

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
    setCartList(JSON.parse(localStorage.getItem("cart")));
  }, [show]);

  const isCartFull = cartList && cartList.length > 0 ? true : false;

  const cartEmpty = (
    <div className={styles.modal___cart_empty}>
      <h3>Cart</h3>
      <h2>Cart is Empty</h2>
    </div>
  )

  const cartFilled = (
    <>
      <div className={styles.modal_header}>
        <h3>Cart - <span>2</span></h3>
        <button>Remove All</button>
      </div>
      <div className={styles.modal_body}>
        {isCartFull && cartList.map((value, index) =>
          <CheckoutCard
            isModal
            key={value._id}
            imagePath={value.path}
            productName={value.title}
            productPrice={value.price}
            productQuantity={value.quantity}
          />
        )}
      </div>
      <div className={styles.modal_footer}>
        <div className={styles.modal_footer___total_bill}>
          <h3>Total</h3>
          <h4>&#8377; 2,999</h4>
        </div>
        <Link to={"/checkout"} onClick={onClose}>Continue to Payout</Link>
      </div>
    </>
  )

  const modalContent = hasTransitionedIn || show ? (
    <div className={`${styles.modal_overlay} ${hasTransitionedIn && show ? styles.modal_show : styles.modal_hide}`} onClick={onClose}>
      <div className={`${styles.modal} ${hasTransitionedIn && show ? styles.modal_show : styles.modal_hide}`} onClick={e => e.stopPropagation()}>
        {isCartFull ? cartFilled : cartEmpty}
      </div>
    </div>
  ) : null

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal")
  );
};

export default CartModal;