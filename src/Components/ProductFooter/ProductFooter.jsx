import React from 'react'
import { footerdata } from '../../Utils/Constant/Data/Data'
import './ProductFooter.css'
import SocialIcon from '../../Utils/Constant/SocialIcon/SocialIcon'
import NewsLetter from '../NewsLetter/NewsLetter'


const ProductFooter = () => {
  return (
    <div>
        <NewsLetter/>
        <div className="FooterMain">
            {footerdata.map((item,index)=>{
                const {main,list1,list2,list3,list4,issocial}=item
                return(
                    <div key={index} className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="content">
                                <h4 className=' text-start'>{main}</h4>
                                <div className="others">
                                <p>{list1}</p>
                                <p>{list2}</p>
                                <p>{list3}</p>
                                <p>{list4}</p>
                                {issocial ? <SocialIcon/> :  null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default ProductFooter
