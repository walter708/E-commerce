import React from 'react';
import './menu-item.style.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title,imageUrl, history ,size, linkUrl, match}) =>{
  
 return (
    <div 
      onClick = {() => history.push(`${match.url}${linkUrl}`)}

      className = {` ${size} menu-item`}
       >

    <div className ="background-image"
    style = {{
        backgroundImage: `url(${imageUrl})`
   }}
    >
    </div>
    <div className = 'content'>
        <h1 className = "title">{title.toUpperCase()}</h1>
        <span className = "subtitle">Shop Now</span>
    </div>
   </div>
 )
  };
 export default withRouter(MenuItem) ;