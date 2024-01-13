/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Product } from "../../components";
import "./Products.scss";

const Products = ({ products, innerPage, headingTitle }) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingTitle}</div>}
      <div className="products">
        {products?.data?.map((item) => {
          return <Product key={item.id} id={item.id} data={item.attributes} />;
        })}
      </div>
    </div>
  );
};

export default Products;
