import { Link } from "@material-ui/core";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddProduct from "../AddProduct/AddProduct";
import EditProduct from "../EditProduct/EditProduct";

const Admin = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={4} className="bg-dark">
                        <Link to="#addProduct" className="text-white">Add Product Here</Link>
                        <br />
                        <Link to="#editproduct" className="text-white">Edit Product Here</Link>
                        <br/>
                        <Link to="#manageproduct" className="text-white">Manage Product Here</Link>
                    </Col>
                    <Col md={8} className="bg-success">
                        <AddProduct></AddProduct>
                        <EditProduct></EditProduct>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Admin;
