import { Card } from "antd";
import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { ProductTypes } from "../../store/actions/ActionType";
import "./ProductCart.css";

const ProductCart = ({ data }) => {
  const { id, title, price, thumbnail } = data;
  const dispatch = useDispatch();
  const discount = price > 27 ? (price * 0.9).toFixed(2) : price.toFixed(2);

  return (
    <div>
      <Card className="drawerCard" hoverable>
        <div className="cartmain">
          <img alt="example" className="image" src={thumbnail} />
          <div className="Cartcontent">
            <p>{title} </p>
            <p className="top">Quantity: 1</p>
            <div className="price-content top">
              <p className="price ">{discount}</p>

              {price > 27 ? (
                <strike className="price red">{price}</strike>
              ) : null}
            </div>
          </div>
          <div className="deleteIcon">
            <DeleteOutlined
              onClick={() =>
                dispatch({ type: ProductTypes.REMOVE_CART, payload: { id } })
              }
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductCart;
