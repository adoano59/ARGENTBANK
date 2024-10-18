import React from 'react';
import '../main.css';
import { logout } from '../api';

export const Nav = () => {
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
        <a className="main-nav-item" href="./sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
};

