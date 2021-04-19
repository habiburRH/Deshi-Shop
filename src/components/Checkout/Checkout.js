import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {

  const { _id } = useParams()
  const [detail, setDetail] = useState([])
  const [loggedinUser, setLoggedinUser] = useContext(UserContext);

  useEffect(() => {
    const url = `http://localhost:5000/checkout/${_id}`
    fetch(url)
      .then(res => res.json())
      .then(data => setDetail(data))
  }, [_id]);
  console.log(detail);
  const { name, price, weight } = detail;

  const handleCheckout = () => {
    const orderInfo = { name, price, weight, ...loggedinUser, orderTime: new Date() }
    const url = `http://localhost:5000/addOrders`

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderInfo)
    })
      .then(res => console.log('server side response', res))
  }

  return (
    <div className="container">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Weight</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{name}</td>
            <td>1</td>
            <td>{weight}</td>
            <td>${price}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="3">Total</td>
            <td>${price}</td>
          </tr>
        </tbody>
      </Table>
      <Button variant="primary" onClick={handleCheckout}> Checkout</Button>
    </div>
  );
};

export default Checkout;