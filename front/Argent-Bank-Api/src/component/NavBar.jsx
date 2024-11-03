import React from 'react';
import '../main.css';
import { logout } from '../store/user';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Nav = () => {
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout())
    navigate('/sign-in')
  }
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index">
        <img
          className="main-nav-logo-image"
          src="/src/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>

        {user ? <button onClick={handleLogout}>Logout</button> :
          <button onClick={() => navigate('/sign-in')}>
            <i className="fa fa-user-circle"></i>
            Sign In
          </button>}
      </div>
    </nav>
  );
};

