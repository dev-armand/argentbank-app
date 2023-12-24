import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'

import Home from './pages/home/home';
import SignIn from './pages/sign-in/sign-in';
import User from './pages/user/user';
import Error from './pages/error/error';
import ProtectedRoutes from './components/routes/protectedRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* donne l'accès au store pour toute l'application */}
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/Home" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          
          <Route element={<ProtectedRoutes />}>
            <Route path="/User" element={<User />} /> 
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);