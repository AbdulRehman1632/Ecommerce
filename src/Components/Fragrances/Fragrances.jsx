import React, { useEffect } from 'react'
import './Fragrances.css'
import { useDispatch, useSelector } from 'react-redux'
import { ProductTypes } from '../../store/actions/ActionType'
import { Col, Row } from 'antd'
import ProductCard from '../ProductCard/ProductCard'

const Fragrances = () => {

    const FragData=useSelector((state)=>state.fragrances)


    const dispatch =useDispatch()

    const RunFrag= async()=>{
        const FragApi= await fetch ('https://dummyjson.com/products/category/fragrances')
        const response = await FragApi.json();
        const FragProduct= Array.isArray (response.products) ? response.products :[]
        dispatch({type:ProductTypes.FRAGRANCES,payload:FragProduct})
    }

    useEffect(()=>{
        RunFrag()
    },[])
  return (
    <div>
        <div className="heading">
      <h1>FRAGRANCES</h1>
    </div>
    <div className="FragMain">
      <Row gutter={[16, 16]}>
        {FragData.map((item, index) => {
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

export default Fragrances
