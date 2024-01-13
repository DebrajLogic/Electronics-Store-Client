/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { Products } from "../../components";
import "./Category.scss";
import useFetch from "../../hooks/useFetch";

const Category = () => {
  const { id } = useParams();

  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );

  const CategoryTitle =
    data?.data[0]?.attributes?.categories?.data[0]?.attributes?.title;

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">{CategoryTitle}</div>
        <Products innerPage={true} products={data} />
      </div>
    </div>
  );
};

export default Category;
