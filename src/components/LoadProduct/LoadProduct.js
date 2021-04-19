import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const LoadProduct = (props) => {
    // console.log("check", props.event);
    const { _id, name, weight, price, imageURL } = props.event;
    const history = useHistory()
    const handleBuyNow = id => {
        // console.log(id);
        const url = `checkout/${id}`
        history.push(url)
    }
    return (
        <>
            <Col md={4} className="p-3">
                <Card className="p-5">
                    <Card.Img variant="top" src={imageURL} />
                    <Card.Body className="text-center">
                        <Card.Title className="font-weight-bold">{name}-{weight}gm</Card.Title>
                        <span className="font-weight-bold h4">Price: ${price}</span>
                        {<Button className="btnStyle" variant="primary" onClick={() => handleBuyNow(_id)}>Buy Now <FontAwesomeIcon icon={faShoppingBag} /></Button>}
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default LoadProduct;
