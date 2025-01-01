import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router';  
import Landing from '../pages/landing/Landing';
import DefualtLayout from '../components/layouts/DefualtLayout'
const RoutesApp = () => (  
  <Router>  
    <DefualtLayout>  
      <Routes>  
        <Route path="/" element={<Landing />} />  
      </Routes>  
    </DefualtLayout>  
  </Router>  
);  

export default RoutesApp;