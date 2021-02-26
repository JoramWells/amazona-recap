import './App.css';

import ShopCategory from './components/ShopCategory';
import ProductDetail from './components/ProductDetail';
import Navigation from './components/Navigation.';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import FrontPage from './components/FrontPage';
import Login from './components/accounts/Login';


function App() {
  return (
    <>
    <Navigation />    
    <ShopCategory />
    <Router>
      <Route path="/product1"  component={ProductDetail} />
      <Route path="/" exact  component={FrontPage}/>
      <Route path="/login" component={Login} />
    </Router>

    <Footer/>
    </>

  );
}

export default App;
