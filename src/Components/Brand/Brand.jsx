import React from "react";
import { brandImages } from "../../Utils/Constant/Data/Data";
import "./brand.css";

const Brand = () => {
  return (
    <div className="container-fluid">
      <div className="row black">
        <div className="col-md-12 main-brand">
          {brandImages.map((items, index) => {
            const { image } = items;
            return (
              <div key={index} className="brandWrapper">
                <img src={image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Brand;
