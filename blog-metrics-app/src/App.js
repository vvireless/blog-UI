import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';  
import BlogDashboard from './BlogDashboard';  
import EmptyPage from './emptyPage';
import LoginPage from './loginPage';
import RegisterPage from './registerPage';
  
const App = () => {  
  return (  
    <div>  
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<BlogDashboard />  }/>
            <Route path="/test" element={<EmptyPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
      {/* Other components or content */}  
      
    </div>  
  );  
};  
  
export default App;  
