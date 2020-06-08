import React from 'react';
import {Component} from 'react';
import {Switch ,Route, Link } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component'


const HatsPage = () => 
  (
    <div>
      <h1>HatsPage</h1>    
    </div>
  );

class App extends Component {

 

  render(){
    
  return (
    <div>
    
    <Route  exact path ="/"  component = {Homepage}  />
    <Route  exact path ="/hats"  component = {HatsPage}  />

    </div>
  );
}
 }
export default App;
