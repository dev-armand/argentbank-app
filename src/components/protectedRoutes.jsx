import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoutes = () => {
  const isAuth = useSelector(state => state.userReducer.isAuthenticated);

  return isAuth ? <Outlet /> : <Navigate to="/SignIn" />;
};

export default ProtectedRoutes;
