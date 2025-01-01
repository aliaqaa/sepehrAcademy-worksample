// Layout.js  
import React from 'react';  
import DefualtHeader from '../common/DefaultHeader'
import DefualtFooter from '../common/DefualtFooter';
const Layout = ({ children }) => (  
  <div>  
    <DefualtHeader/>
    <main>{children}</main>  
     
    <DefualtFooter/>
  </div>  
);  

export default Layout;