
import * as React from "react";
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './pages/Home'
import './index.css'
import SignIn from "./pages/Sign-in";
import User from "./pages/User";
import { store } from './store'
import { Provider } from 'react-redux'
import { GuestRoute, PrivateRoute } from "./component/Routes";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />

  },
  {
    path: "/index",
    element: <App />

  },
  {
    path: "/sign-in",
    element: (
      <GuestRoute>
        <SignIn />
      </GuestRoute>
    ),

  },
  {
    path: "/user",
    element: (
      <PrivateRoute>
        <User />
      </PrivateRoute>
    ),

  }

]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

