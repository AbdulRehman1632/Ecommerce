import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductTypes } from '../../store/actions/ActionType'
import './WomenBags.css'
import { Col, Row } from 'antd'
import ProductCard from '../ProductCard/ProductCard'

const WomenBags = () => {

    const BagsData = useSelector((state)=>state?.bags)

    const dispatch= useDispatch()

    const RunBags=async()=>{
        const BagsApi= await fetch ('https://dummyjson.com/products/category/womens-bags')
        const response = await BagsApi.json()
        const BagsProducts = Array.isArray (response.products) ? response.products : []
        dispatch({type:ProductTypes.BAGS,payload:BagsProducts})

    }

    useEffect(()=>{
        RunBags()
    },[])

  return (
    <div>
        <div className="heading">
        <h1>WOMENS BAGS </h1>
      </div>
      <div className="WomenBags">
        <Row gutter={[16, 16]}>
          {BagsData.map((item, index) => {
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

export default WomenBags
