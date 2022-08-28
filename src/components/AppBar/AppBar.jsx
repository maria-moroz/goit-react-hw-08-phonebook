import { NavLink, Link } from 'react-router-dom';
import { BsHouseDoorFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import s from './AppBar.module.css';
import UserMenu from 'components/UserMenu/UserMenu';
import { getUserToken } from 'redux/auth/authSlice';

const StyledLink = styled(NavLink)`
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 17px;
  display: flex;
  align-items: center;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active,
  &:hover,
  &:focus {
    color: #8879b0;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export default function AppBar() {
  const userToken = useSelector(getUserToken);
  return (
    <header className={s.header}>
      <nav className={s.navigation}>
        <Link to="/" className={s.homeLink}>
          <BsHouseDoorFill />
          <span className={s.homeLinkText}>Home</span>
        </Link>
        {userToken && (
          <div className={s.appNav}>
            <StyledLink to="/contacts-list" className={s.navLink}>
              My contacts
            </StyledLink>
            <StyledLink to="/contacts-add" className={s.navLink}>
              Add contact
            </StyledLink>
          </div>
        )}
      </nav>
      {!userToken && (
        <div className={s.authNav}>
          <StyledLink to="/login" className={s.navLink}>
            Sign in
          </StyledLink>
          <StyledLink to="/register" className={s.navLink}>
            Register
          </StyledLink>
        </div>
      )}
      {userToken && <UserMenu />}
    </header>
  );
}
