import React from 'react';
import {Component} from 'react';
import {Switch ,Route, Link } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header-component/header.component';
import SignInSignUp from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component'
import {auth} from './firebase/firebase.utls'


class App extends Component {
      constructor(){
        super();
         this.state = {
           currentUser : null
         }
      }
 
unsubscribeFromAuth = null;

 componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
        this.setState({currentUser : user});
        console.log(user);
    })
 }
 componentWillUnmount() {
   this.unsubscribeFromAuth();
 }

  render(){
    
  return (
    <div>
    <Header currentUser = {this.state.currentUser} />
    <Switch>
    <Route  exact path ="/"  component = {Homepage}  />
    <Route  exact path ="/shop"  component = {ShopPage}  />
    <Route  exact path ="/signin"  component = {SignInSignUp}  />
    </Switch>
    </div>
  );
}
 }
export default App;
