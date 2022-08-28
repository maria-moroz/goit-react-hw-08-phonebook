import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserToken } from 'redux/auth/authSlice';

export default function PrivateRoute({ children, redirectTo = '/' }) {
  const userToken = useSelector(getUserToken);
  return userToken ? children : <Navigate to={redirectTo} replace={true} />;
}

PrivateRoute.propTypes = {
  children: PropTypes.any,
  redirectTo: PropTypes.string,
};
