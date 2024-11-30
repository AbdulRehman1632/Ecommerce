import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductTypes } from '../../store/actions/ActionType'
import { Col, Row } from 'antd'
import ProductCard from '../ProductCard/ProductCard'
import './NewArrival.css'

const NewArrival = () => {
    const dispatch =useDispatch()
    const TopsData = useSelector((state)=>state?.tops)
    const ShoeData = useSelector((state)=>state?.shoe)


    const RunTops=async ()=>{
        const TopsApi= await fetch ('https://dummyjson.com/products/category/tops')
        const response = await TopsApi.json();
        const Tops= Array.isArray(response.products) ? response.products : []
        dispatch({type:ProductTypes.TOPS,payload:Tops})

    }

    const RunShoes=async ()=>{
        const ShoesApi= await fetch ('https://dummyjson.com/products/category/womens-shoes')
        const response = await ShoesApi.json();
        const Shoes= Array.isArray(response.products) ? response.products : []
        dispatch({type:ProductTypes.SHOES,payload:Shoes})

    }



    useEffect(()=>{
        RunTops();
        RunShoes()
    },[])

  return (
    <div>
         <div className="heading">
      <h1>TOPS</h1>
    </div>
    <div className="TopsMain">
      <Row gutter={[16, 16]}>
        {TopsData.map((item, index) => {
          return (
            <Col key={index} lg={6} sm={12} md={12} xs={12}>
              <ProductCard data={item} />
            </Col>
          );
        })}
      </Row>
    </div>


    <div className="heading">
      <h1>WOMEN SHOES</h1>
    </div>
    <div className="SkinMain">
      <Row gutter={[16, 16]}>
        {ShoeData.map((item, index) => {
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

export default NewArrival
