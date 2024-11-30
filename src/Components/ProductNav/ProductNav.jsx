import React, { useEffect, useState } from "react";
import "./ProductNav.css";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Empty } from "antd";
import ProductCart from "../Cart/ProductCart";
import { useSelector } from "react-redux";
import CustomButton from "../../Utils/Constant/CustomButton/CustomButton";
import { NavLink, useNavigate } from "react-router";

const ProductNav = () => {
  const cartdata = useSelector((state) => state?.cart);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate=useNavigate()

  useEffect(() => {
    setShow(false);
  }, [cartdata.length == 0]);

  const TotalAmount = cartdata.reduce((acc, value) => {
    return acc + value.price;
  }, 0);

  return (
    <div>
      <Navbar expand="lg" className="color">
        <Container fluid>
          <div className="display">
            <Badge count={cartdata?.length}>
              <ShoppingCartOutlined className="white" onClick={handleShow} />
            </Badge>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="heading">Cart</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {cartdata.length > 0 ? (
                  <>
                    {cartdata.map((item) => {
                      return (
                        <>
                          <ProductCart key={item.id} data={item} />
                        </>
                      );
                    })}
                    <div className="checkout">
                      <h5 className="heading">Order Summary</h5>
                      <p>
                        SubTotal: <span> ${TotalAmount}</span>{" "}
                      </p>
                      <p>
                        Delivery Fee: <span> $15</span>
                      </p>
                      <p>
                        Total: <span>${Math.round(TotalAmount + 15)}</span>
                      </p>
                      <div className="CheckoutBtn">
                        <CustomButton title="Go to Checkout" onClick={() => {navigate(`/Checkout`); handleClose();}}/>
                      </div>
                    </div>
                  </>
                ) : (
                  <Empty description="No Products Found" />
                )}
              </Offcanvas.Body>
            </Offcanvas>

            <Navbar.Brand className="logo white">
              The Productist
            </Navbar.Brand>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="white"/>

          <Navbar.Collapse id="basic-navbar-nav" className="white">
            <Nav className="me-auto lists ">
              <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item><NavLink to={"MenShirts"}>MenShirts</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to={"Women"}>Women</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to={"MenWatches"}>MenWatches</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to={"Jewellery"}>Jewellery</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to={"Beauty"}>Beauty</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to={"WomenBags"}>WomenBags</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to={"Fragrances"}>Fragrances</NavLink></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home"><NavLink to={"home"}>Home</NavLink></Nav.Link>
              <Nav.Link ><NavLink to={"NewArrival"}>New Arrival</NavLink></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default ProductNav;
