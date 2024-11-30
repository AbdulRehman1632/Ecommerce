import React, { useState } from "react";
import "./ProductDetail.css";
import { useLocation, useNavigate } from "react-router";
import CustomButton from "../../Utils/Constant/CustomButton/CustomButton";
import Demo from "../demo";
import Orderfield from "../OrderField/Orderfield";

const ProducDetail = () => {
  const location = useLocation();
  const navigate=useNavigate()
  const product = location.state;
  const {
    id,
    title,
    price,
    thumbnail,
    description,
    shippingInformation,
    returnPolicy,
    reviews,
    availabilityStatus,
  } = product;


  const discount = price > 27 ? (price * 0.9).toFixed(2) : price.toFixed(2);
  return (
    <div>
      <div className="detailMain">
        <div className="container adjust">
          <div className="row center">
            <div className="col-md-6 ">
              <div className="DetailImage">
                <img src={thumbnail} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="DetailContent">
                <div className="Detailheading">
                  <h4>{title}</h4>
                </div>
                <div className="DetailStars">
                  <Demo />
                </div>

                <div className="Price">
                  <p className="price ">{discount}</p>

                  {price > 27 ? (
                    <strike className="price red">{price}</strike>
                  ) : null}
                </div>

                <div className="availabilityStatus">
                  <p>{availabilityStatus}</p>
                </div>

                <div className="description">
                  <p>{description}</p>
                </div>

                <div className="Shipping">
                  <p>{shippingInformation}</p>
                </div>

                <div className="returnPolicy">
                  <p>{returnPolicy}</p>
                </div>
                

                <div className="DetailBtn">
                  <CustomButton  title="Order Now" onClick={() => navigate(`/Checkout`)}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   

      <div className="review">
        <div className="container">
          <div className="heading mt-4">
            <h2>Customer Reviews</h2>
          </div>
          <div className="row">
            <div className="col-md-6 resp">
              {reviews.map((item, index) => {
                const { comment, rating, reviewerEmail, reviewerName } = item;
                return (
                  <div key={index} className="mainReview bg">
                    <h5 className="heading">{reviewerName}</h5>
                    <p>
                      Email:{" "}
                      <span style={{ color: "green" }}> {reviewerEmail} </span>
                    </p>
                    <p>
                      Commment:{" "}
                      <span style={{ color: "green" }}> {comment}</span>{" "}
                    </p>
                    <p>
                      Rating: <span style={{ color: "green" }}>{rating}</span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProducDetail;
