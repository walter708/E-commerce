import React from 'react';



import { connect } from 'react-redux';

import {createStructuredSelector} from 'reselect';

import {HeaderContainer , LogoContainer , OptionsContainer, OptionLink} from './header.styles'

import {ReactComponent as Logo} from '../../assets/crown.svg';

import {auth} from '../../firebase/firebase.utls';

import {selectCartHidden} from '../../redux/cart/cart.selectors'

import {selectCurrentUser} from '../../redux/user/user.selectors'

import CartIcon from '../cart-icon/cart-icon.component';




import CartDropdown from '../cart-dropdown/cart-dropdown.component';


const Header = ({currentUser , hidden}) => (
    <HeaderContainer>
    <LogoContainer  to= '/'>
         <Logo className = 'logo'></Logo>
      
    </LogoContainer>
     
    <OptionsContainer>
        <OptionLink to = '/shop'>
           SHOP
        </OptionLink>
        <OptionLink to = '/shop' >
           CONTACTS
        </OptionLink>
        
        {
            currentUser ? 
             <OptionLink as ='div' onClick  = {() => auth.signOut()} >SIGN OUT</OptionLink>
             :
             <OptionLink to = "/signin">SIGN IN</OptionLink>
        }
        
       <CartIcon />
    </OptionsContainer>
    {
       hidden ? null 

       : <CartDropdown />
       
    }
     
    </HeaderContainer>
);
   const mapStateToProps = createStructuredSelector({
     currentUser: selectCurrentUser,
      hidden: selectCartHidden
   });


export default connect(mapStateToProps)(Header);
