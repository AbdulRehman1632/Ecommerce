import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductTypes } from '../../store/actions/ActionType'
import { Col, Row } from 'antd'
import ProductCard from '../ProductCard/ProductCard'
import './Beauty.css'

const Beauty = () => {
    const beautydata = useSelector((state)=>state?.beauty)
    console.log(beautydata)

    const dispatch=useDispatch()

    const RunBeauty=async()=>{
        const BeautyApi= await fetch ('https://dummyjson.com/products/category/beauty')
        const response = await BeautyApi.json()
        const BeautyProducts = Array.isArray (response.products) ? response.products : []
        dispatch({type:ProductTypes.BEAUTY,payload:BeautyProducts})
    }


    useEffect(()=>{
        RunBeauty()
    },[])
  return (
    <div>
         <div className="heading">
        <h1>BEAUTY</h1>
      </div>
      <div className="BeautyMain">
        <Row gutter={[16, 16]}>
          {beautydata.map((item, index) => {
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

export default Beauty
