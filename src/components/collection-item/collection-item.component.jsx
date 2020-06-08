import React from 'react';
import './collection-item.style.scss';

const CollectionItem  =  ({id , name ,  price , imageUrl}) => (
    <div className = "collection-item">
         <div className = 'image' 
              style = {{
                  background: `url(${imageUrl})`
              }}
         />

         <div className ='collection-footer'>
           <span class = 'name'>{name}</span>
           <span class = 'price'>{price}</span>
         </div>
         
         
    </div>
)
export default CollectionItem;