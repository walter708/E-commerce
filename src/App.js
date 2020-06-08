import React from 'react';
import {Component} from 'react';
import {Switch ,Route, Link } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'


class App extends Component {

 

  render(){
    
  return (
    <div>
    
    <Route  exact path ="/"  component = {Homepage}  />
    <Route  exact path ="/shop"  component = {ShopPage}  />

    </div>
  );
}
 }
export default App;
