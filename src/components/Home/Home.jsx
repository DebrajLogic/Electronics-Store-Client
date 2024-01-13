/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { Banner, HomeCategory, Products } from "../../components";
import { fetchDataFromApi } from "../../utils/api";
import "./Home.scss";
import { Context } from "../../utils/Context";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      console.log("categories = ", res);
      setProducts(res);
    });
  };

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log("categories = ", res);
      setCategories(res);
    });
  };
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <HomeCategory categories={categories} />
          <Products products={products} headingTitle="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
