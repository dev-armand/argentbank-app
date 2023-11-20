import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'

import Home from './pages/home/home';
import SignIn from './pages/sign-in/sign-in';
import User from './pages/user/user';
import Error from './pages/error/error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <Router>
        <Routes>
          <Route index element={<Home />} /> 
          <Route path="/Home" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/User" element={<User />} />
          <Route path="*" element={<Error />} />
       </Routes>
     </Router>
   
  </React.StrictMode>
);