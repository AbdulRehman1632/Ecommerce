import React, { useEffect } from "react";
import "./Women.css";
import { useDispatch, useSelector } from "react-redux";
import { ProductTypes } from "../../store/actions/ActionType";
import { Col, Row } from "antd";
import ProductCard from "../ProductCard/ProductCard";

const Women = () => {
  const women = useSelector((state) => state?.women);
  const dispatch = useDispatch();

  const getWomenData = async () => {
    const womenApi = await fetch(
      "https://dummyjson.com/products/category/womens-dresses"
    );
    const response = await womenApi.json();
    // console.log(response)
    const womenProduct = Array.isArray(response.products)
      ? response.products
      : [];
    // console.log(womenProduct);

    dispatch({ type: ProductTypes.WOMEN_PRODUCTS, payload: womenProduct });
  };

  // console.log(women)

  useEffect(() => {
    getWomenData();
  }, []);

  return (
    <>
      <div className="heading">
        <h1>WOMENS</h1>
      </div>
      <div className="WomenMain">
        <Row gutter={[16, 16]}>
          {women.map((item, index) => {
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

export default Women;
