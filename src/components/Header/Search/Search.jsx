/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { MdClose } from "react-icons/md";
import ProductImage from "../../../assets/products/earbuds-prod-1.webp";
import "./Search.scss";

const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for products" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="img-container">
              <img src={ProductImage} alt="" />
            </div>
            <div className="product-details">
              <span className="name">Product Name</span>
              <span className="description">Product Description</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
