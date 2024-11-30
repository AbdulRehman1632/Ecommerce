import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { ProductTypes } from "../../store/actions/ActionType";
import { Col, Row } from "antd";
import "./Mens.css";

const Mens = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state?.allProducts);
  console.log(allProducts)

  const getData = async () => {
    const productData = await fetch(
      "https://dummyjson.com/products/category/mens-shirts"
    );
    const response = await productData.json();

    const products = Array.isArray(response.products) ? response.products : [];

    dispatch({ type: ProductTypes.All_Products, payload: products });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="heading">
        <h1>MENS SHIRTS</h1>
      </div>
      <div className="MensMain">
        <Row gutter={[16, 16]}>
          {allProducts.map((item, index) => {
            return (
              <Col key={index} lg={6} sm={12} md={12} xs={12}>
                <ProductCard data={item} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default Mens;
