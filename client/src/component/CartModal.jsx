import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import useMountTransition from "../customHook/useMountTransition";
import styles from "../styles/modal.module.css";
import CheckoutCard from "./CheckoutCard";
import useLocalStorage from "../customHook/useLocalStorage";

const productData = [
  {
    path: "/assets/earphone_blue.png",
    id: 200,
    head: "XX99 II",
    price: 2000,
    quantity: 2
  },
  {
    path: "/assets/earphone_green.png",
    id: 201,
    head: "XX99 I",
    price: 3999,
    quantity: 1
  },
  {
    path: "/assets/earphone_aqua.png",
    id: 202,
    head: "X10",
    price: 1999,
    quantity: 2
  },
]

const CartModal = ({ show, onClose }) => {

  const hasTransitionedIn = useMountTransition(show, 1000);

  const [cartList, setCartList] = useLocalStorage("cartModal", [])

  console.log(cartList)

  useEffect(() => {
    const closeOnEscapeKeyDown = e => {
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    };
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return () => document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
  }, [onClose]);

  // useEffect(() => {
  //   if(localStorage.getItem("cart"))
  //     setCartList(JSON.parse(localStorage.getItem("cart")));
  // }, [cartList]);

  const isCartFull = true;

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
        {productData.map((value, index) =>
          <CheckoutCard
            isModal
            key={value.id}
            imagePath={value.path}
            productName={value.head}
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