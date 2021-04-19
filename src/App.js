import './App.css';
import NotFound from './components/NotFound/NotFound';
import { createContext, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './components/AddProduct/AddProduct';
import LoadProduct from './components/LoadProduct/LoadProduct';
import Checkout from './components/Checkout/Checkout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import EditProduct from './components/EditProduct/EditProduct';
import Deals from './components/Deals/Deals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const UserContext = createContext();

function App() {
  const [loggedinUser, setLoggedinUser] = useState({});
  return (
    <UserContext.Provider value={[loggedinUser, setLoggedinUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/deals">
            <Deals />
          </Route>
          <PrivateRoute path="/checkout/:_id">
            <Checkout />
          </PrivateRoute >
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute >
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute >
          <PrivateRoute path="/editproduct">
            <EditProduct />
          </PrivateRoute >

          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/addProduct">
            <AddProduct />
          </Route>
          <Route path="/loadProduct">
            <LoadProduct />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
