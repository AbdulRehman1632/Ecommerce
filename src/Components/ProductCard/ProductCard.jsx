import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { ProductTypes } from "../../store/actions/ActionType";
import Demo from "../demo";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const { Meta } = Card;

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();

  const { id, title, price, thumbnail, description } = data;
  const navigator = useNavigate();

  const discount = price > 27 ? (price * 0.9).toFixed(2) : price.toFixed(2);

  const handleAddToCart = () => {
    dispatch({ type: ProductTypes.CART_PRODUCT, payload: data });
    toast.success(`${title} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <Card
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="relative"
        hoverable
        style={{ width: 230 }}
        cover={<img alt="example" src={thumbnail} />}
      >
        <Meta
          title={title}
          description={description.slice(0, 70)}
          onClick={() => navigator(`/ProductDetail/${id}`, { state: data })}
        />

        <div className="price-content">
          <p className="price ">{discount}</p>

          {price > 27 ? <strike className="price red">{price}</strike> : null}
        </div>

        <div className="stars">
          <Demo />
        </div>

        <div className="cartWrapper">
          <ShoppingCartOutlined
            onClick={() => handleAddToCart()}
            className="cart"
          />
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
