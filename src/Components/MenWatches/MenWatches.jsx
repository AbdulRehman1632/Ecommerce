import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductTypes } from "../../store/actions/ActionType";
import { Col, Row } from "antd";
import ProductCard from "../ProductCard/ProductCard";
import "./MenWatches.css";

const MenWatches = () => {
  const dispatch = useDispatch();
  
  const allwatches = useSelector((state) => state?.watches);

  const RunWatches = async () => {
    const WatchesApi = await fetch(
      "https://dummyjson.com/products/category/mens-watches"
    );
    const response = await WatchesApi.json();
    const MenWatches = Array.isArray(response.products)
      ? response.products
      : [];

    dispatch({ type: ProductTypes.MEN_WATCHES, payload: MenWatches });
  };

  useEffect(() => {
    RunWatches();
  }, []);

  return (
    <>
    <div className="heading">
      <h1>MEN WATCHES</h1>
    </div>
    <div className="WatchesMain">
      <Row gutter={[16, 16]}>
        {allwatches.map((item, index) => {
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

export default MenWatches;
