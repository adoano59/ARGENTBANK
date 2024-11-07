import React from 'react'
import '../main.css'
import { logout } from '../store/user'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'

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

      {user ? (
  <div>
    <a href="/user"><span><i class="fa fa-user-circle"></i>&nbsp;{user.firstName}</span></a>
    <button onClick={handleLogout}> <i class="fa fa-sign-out"></i>&nbsp;Logout</button>
  </div>
) : (
  <button onClick={() => navigate('/sign-in')}>
    <i className="fa fa-user-circle"></i>&nbsp; Sign In
  </button>
)}
      </div>
    </nav>
  );
};

