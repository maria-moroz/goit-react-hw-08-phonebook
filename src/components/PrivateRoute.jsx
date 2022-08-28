import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSlice';

export default function PrivateRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log(isLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} replace={true} />;
}
