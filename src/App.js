import React from 'react';
import {Component} from 'react';
import {Switch ,Route ,Redirect } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header-component/header.component';
import SignInSignUp from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import {auth, creatUserProfileDocument} from './firebase/firebase.utls';
import {connect } from  'react-redux';
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
    <Route  exact path ="/shop"  component = {ShopPage}  />
    
    <Route  exact path ="/signin"  render = {() => this.props.currentUser 
       ?(<Redirect to = "/" />) :(<SignInSignUp />)}  />
    </Switch>
    </div>
  );
}
 }
    
 const mapStateToProps =  ({user}) =>   ({
   currentUser:user.currentUser
 })
 const mapDispatchToProps = dispatch => ({

       setCurrentUser : user => dispatch(setCurrentUser(user))
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);
