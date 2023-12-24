import { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const [isAuth, setIsAuth] = useState({ 'token': false });
  const token = sessionStorage.getItem("token");

// définit le status de isAuth en fonction de la présence ou de l'absence du token
  useEffect(() => {
    if (token) {
      setIsAuth({ 'token': true });
    } else {
      setIsAuth({ 'token': false });
    }
  }, []);

  return isAuth ? <Outlet /> : <Navigate to="/SignIn" />;
};

export default ProtectedRoutes;
