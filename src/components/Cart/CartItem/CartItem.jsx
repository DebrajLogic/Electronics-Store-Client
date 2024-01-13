/* eslint-disable no-unused-vars */
import { MdClose } from "react-icons/md";
import ProductImage from "../../../assets/products/earbuds-prod-1.webp";
import "./CartItem.scss";

const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src={ProductImage} alt="" />
        </div>
        <div className="product-details">
          <span className="name">Product Name</span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>3 </span>
            <span> x </span>
            <span className="highlight">&#36; 1000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
