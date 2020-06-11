import React from 'react';
import {Component} from 'react';
import {Switch ,Route, Link } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header-component/header.component.jsx';

class App extends Component {

 

  render(){
    
  return (
    <div>
    <Header />
    <Switch>
    <Route  exact path ="/"  component = {Homepage}  />
    <Route  exact path ="/shop"  component = {ShopPage}  />
    </Switch>
    </div>
  );
}
 }
export default App;
