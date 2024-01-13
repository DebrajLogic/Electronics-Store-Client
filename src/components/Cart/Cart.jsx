/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { CartItem } from "../../components";
import "./Cart.scss";

const Cart = ({ setShowCart }) => {
  return (
    <div className="cart-panel">
      <div className="opacity-layer">opac layer</div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-button" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="close">Close</span>
          </span>
        </div>

        {/* <div className="empty-cart">
          <BsCartX />
          <span>No products in the cart</span>
          <button className="return-cta">RETURN TO SHOP</button>
        </div> */}

        <>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal </span>
              <span className="text total">&#36; 1000</span>
            </div>
            <div className="button">
              <button className="checkout-cta">Checkout</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
