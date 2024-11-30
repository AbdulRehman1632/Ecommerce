import React, { useEffect } from 'react'
import './Jewellery.css'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'antd';
import ProductCard from '../ProductCard/ProductCard';
import { ProductTypes } from '../../store/actions/ActionType';

const Jewellery = () => {

    const dispatch=useDispatch();

    const Jewel=useSelector((state)=>state?.jewellery)
    console.log(Jewel)

    const RunJewellery=async()=>{
        const getJew = await fetch ("https://dummyjson.com/products/category/womens-jewellery")
        const response = await getJew.json()
        console.log(response)

        const Jewelleryproduct= Array.isArray (response.products) ? (response.products) : [];
        console.log(Jewelleryproduct)


        dispatch({type: ProductTypes.JEWELLERY,payload:Jewelleryproduct})

    }

    useEffect(()=>{
        RunJewellery()
    },[])




  return (
    <div>

<div className="heading">
        <h1>JEWELLERY</h1>
      </div>
      <div className="JewelleryMain">
        <Row gutter={[16, 16]}>
          {Jewel.map((item, index) => {
            return (
              <Col key={index} lg={6} sm={12} md={12} xs={12}>
                <ProductCard data={item} />
              </Col>
            );
          })}
        </Row>
      </div>

      
    </div>
  )
}

export default Jewellery
