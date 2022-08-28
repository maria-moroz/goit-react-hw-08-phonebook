import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserToken } from 'redux/auth/authSlice';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
}) {
  const userToken = useSelector(getUserToken);
  const shouldRedirect = userToken && restricted;
  return shouldRedirect ? (
    <Navigate to={redirectTo} replace={true} />
  ) : (
    children
  );
}
