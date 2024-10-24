import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// PrivateRoute: redirige vers /sign-in si l'utilisateur n'est pas connecté
export const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.user.user); // utilise le state de userSlice
  return user ? children : <Navigate to="/sign-in" />;
};

// GuestRoute: redirige vers /user si l'utilisateur est déjà connecté
export const GuestRoute = ({ children }) => {
  const user = useSelector((state) => state.user.user); // utilise le state de userSlice
  return !user ? children : <Navigate to="/user" />;
};
