import React from 'react'
import './NewsLetter.css'
import CustomButton from "../../Utils/Constant/CustomButton/CustomButton";

const NewsLetter = () => {
  return (
    <div>
        <div data-aos="fade-down" data-aos-duration="500" className="NewMain ">
            <div className="container ">
                <div className="row ">
                    <div className="col-md-6 ">
                        <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>

                    </div>
                    <div className="col-md-6">
                       <div className="newsContent">
                       <input type="email" placeholder='Enter your email address' />
                       <CustomButton title="Subscribe to NewsLetter"/>
                       </div>

                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default NewsLetter
