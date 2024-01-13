/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import CategoryImage1 from "../../../assets/category/cat-1.jpg";
import { useNavigate } from "react-router-dom";
import "./HomeCategory.scss";

const HomeCategory = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item) => {
          const CategoryImage =
            import.meta.env.VITE_APP_BASE_URL +
            item?.attributes?.img?.data?.attributes?.url;
          return (
            <div
              key={item?.id}
              className="category"
              onClick={() => navigate(`/category/${item?.id}`)}
            >
              <img src={CategoryImage} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCategory;
