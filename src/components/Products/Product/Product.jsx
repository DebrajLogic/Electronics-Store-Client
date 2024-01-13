/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ id, data }) => {
  const navigate = useNavigate();

  const ProductImage =
    import.meta.env.VITE_APP_BASE_URL + data?.img?.data[0]?.attributes?.url;
  return (
    <div className="product-card" onClick={() => navigate(`/product/${id}`)}>
      <div className="thumbnail">
        <img src={ProductImage} alt="" />
      </div>
      <div className="product-details">
        <span className="name">{data.title}</span>
        <span className="price">&#36; {data.price}</span>
      </div>
    </div>
  );
};

export default Product;
