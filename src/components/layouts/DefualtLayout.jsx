// Layout.js  
import React from 'react';  
import DefualtHeader from '../common/DefaultHeader'
import DefualtFooter from '../common/DefualtFooter';
import { Outlet } from 'react-router';
const Layout = ({ children }) => (  
  <div>  
    <DefualtHeader/>
    <main> <Outlet /></main>  
     
    <DefualtFooter/>
  </div>  
);  

export default Layout;