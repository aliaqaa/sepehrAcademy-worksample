import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router';  
import Landing from '../pages/landing/Landing';
import DefualtLayout from '../components/layouts/DefualtLayout'
import NotFound from '../pages/NotFound/NotFound';
const RoutesApp = () => (  
  <Router>  
    <DefualtLayout>  
      <Routes>  
        <Route path="/" element={<Landing />} />  
        <Route path="*" element={<NotFound />} />  
      </Routes>  
    </DefualtLayout>  
  </Router>  
);  

export default RoutesApp;