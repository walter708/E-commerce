import React from 'react';
import {Component} from 'react';
import {Switch ,Route ,Redirect } from 'react-router-dom';
import {connect } from  'react-redux';
import {createStructuredSelector} from 'reselect';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header-component/header.component';
import {auth, creatUserProfileDocument} from './firebase/firebase.utls';
import {selectCurrentUser} from './redux/user/user.selectors'
import { setCurrentUser } from './redux/user/user.action';


class App extends Component {

    
 
unsubscribeFromAuth = null;

 componentDidMount () {
  const {setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
      if (userAuth){
        const userRef = await creatUserProfileDocument(userAuth);

         userRef.onSnapshot(snapShot => {
              
            setCurrentUser({
              currentUser: {
                id : snapShot.id,
                ...snapShot.data()
              }
            });
           
         });

        }
      
      else{} 
      setCurrentUser(userAuth);
    });
 }
 componentWillUnmount() {
   this.unsubscribeFromAuth();
 }

  render(){
    
  return (
    <div>
    <Header/>
    <Switch>
    <Route  exact path ="/"  component = {Homepage}  />
    <Route   path ="/shop"  component = {ShopPage}  />
    <Route  exact path ="/signin"  render = {() => this.props.currentUser 
       ?(<Redirect to = "/" />) :(<SignInSignUp />)}  />
       <Route  exact path ="/checkout"  component = {CheckoutPage}  />
    </Switch>
    </div>
  );
}
 }
    
 const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser
 });

 const mapDispatchToProps = dispatch => ({

       setCurrentUser : user => dispatch(setCurrentUser(user))
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);
