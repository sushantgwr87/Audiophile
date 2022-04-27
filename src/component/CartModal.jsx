import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import useMountTransition from "../customHook/useMountTransition";
import styles from "../styles/modal.module.css";

const CartModal = ({ show, onClose }) => {

  const hasTransitionedIn = useMountTransition(show, 1000);

  useEffect(() => {
    const closeOnEscapeKeyDown = e => {
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    };
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return () => document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
  }, [onClose]);

  const modalContent = hasTransitionedIn || show ? (
    <div className={`${styles.modal_overlay} ${hasTransitionedIn && show ? styles.modal_show : styles.modal_hide}`} onClick={onClose}>
      <div className={`${styles.modal} ${hasTransitionedIn && show ? styles.modal_show : styles.modal_hide}`} onClick={e => e.stopPropagation()}>
          <div className={styles.modal_header}>
            <h3>Cart - <span>2</span></h3>
            <button>Remove All</button>
          </div>
          <div className={styles.modal_body}></div>
          <div className={styles.modal_footer}>
            <div className={styles.modal_footer___total_bill}>
              <h3>Total</h3>
              <h2>value</h2>
            </div>
            <Link to={"/checkout"} onClick={onClose}>Continue to Payout</Link>
          </div>
      </div>
    </div>
  ) : null

    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal")
    );
};

export default CartModal;