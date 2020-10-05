import React from 'react';

import {connect} from 'react-redux';

import {selectDirectorySection} from '../../redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect';

import './directory.style.scss'

import MenuItem from '../menu-item/menu-item.component';

 


const Directory = ({sections}) =>(
        <div className = 'directory-menu' >
         {sections.map(({id , ...OtherSecttionProps}) =>(
                      <MenuItem key = {id} {...OtherSecttionProps} />

     ))
         }  
        </div>
);

const mapStateToProps  = createStructuredSelector ({
  sections : selectDirectorySection
})

export default connect (mapStateToProps)(Directory);
