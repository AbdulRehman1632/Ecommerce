import React from "react";
import "./Banner.css";
import { Bannerdata, BannerList } from "../../Utils/Constant/Data/Data";
import CustomButton from "../../Utils/Constant/CustomButton/CustomButton";
import Brand from "../Brand/Brand";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();


const Banner = () => {
  const { heading, para, image } = Bannerdata;

  return (
    <div>
      <div className="BannerWrapper">
        <div  data-aos="fade-right" data-aos-duration="1500" className="container-fluid">
          <div className="row bg">
            <div className="col-md-6 content">
              <div className="BannerHeading">
                <h1>{heading}</h1>
              </div>

              <div className="bannerPara">
                <p>{para}</p>
              </div>

              <div className="BannerBtn">
                <CustomButton title="Shop Now" />
              </div>

              <div className="Lists">
                {BannerList.map((items, index) => {
                  const { num, info } = items;

                  return (
                    <div key={index} className="Details">
                      <h2>{num}</h2>
                      <p>{info}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-md-6">
              <div className="BannerImage">
                <img src={image} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default Banner;
