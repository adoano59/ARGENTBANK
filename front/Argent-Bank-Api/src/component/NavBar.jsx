import React from 'react';
import '../main.css';
import { logout } from '../api';
import { useSelector } from 'react-redux';

export const Nav = () => {
  const user = useSelector((state) => state.user.user)
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
        {user ? <button onClick={logout}>Logout</button> :
          <a className="main-nav-item" href="./sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>}
      </div>
    </nav>
  );
};

