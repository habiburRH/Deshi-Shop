import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { UserContext } from "../../App";

const Orders = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then((res) => res.json())
            .then((data) => filterOrders(data));
    }, []);
    const filterOrders = (data) => {
        const filterData = data.filter(
            (order) => order.email == loggedinUser.email
        );
        setOrders(filterData);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col md={6}>
                            <h3 className="text-center">Order Total:{orders.length}{" "}</h3>
                        </Col>
                        <Col md={6}>
                            <h2 className="text-center text-danger">This Order Made by: {loggedinUser.email}</h2>
                        </Col>
                    </Row>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th className="bg-primary">Product Name</th>
                                <th className="bg-warning">Quantity</th>
                                <th className="bg-success">Weight</th>
                                <th className="bg-danger">Price</th>
                            </tr>
                        </thead>
                    </Table>
                    {orders.map((singleOrder) => {
                        return (
                            <div>
                                <div className="container">
                                    <Table striped bordered hover variant="dark">
                                        <tbody>
                                            <tr>
                                                <td className="bg-primary">{singleOrder.name}</td>
                                                <td className="bg-warning">1</td>
                                                <td className="bg-success">{singleOrder.weight}</td>
                                                <td>${singleOrder.price}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        );
                    })}
                </Col>
            </Row>
        </Container>
    );
};

export default Orders;
