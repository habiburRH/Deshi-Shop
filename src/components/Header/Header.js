import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
const Header = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    // console.log(loggedinUser);
    return (
        <>
            <Navbar bg="dark" expand="lg" className="sticky-top">
                <Navbar.Brand as={Link} to="/" className="text-white">Deshi Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} className="text-white" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/orders">Orders</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/admin">Admin</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/deals">Deals</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/signin">
                            {loggedinUser.displayName ? loggedinUser.displayName : "Sign in"}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;