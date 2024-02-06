import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";
import Watch from "./components/Watch/Watch";
import Groups from "./components/Groups/Groups";
import Gaming from "./components/Gaming/Gaming";
import MarketPlace from "./components/MarketPlace/MarketPlace";

import MainPage from "./pages/MainPage";

import Feed from "./components/Feed/Feed";
import Log from "./components/Log/Log";

const Routing = ({ login }) => {
  const routes = [
    {
      path: "/",
      element: <MainPage children={<Feed />} />,
    },
    {
      path: "/watch",
      element: <MainPage children={<Watch />} />,
    },
    {
      path: "/marketplace",
      element: <MainPage children={<MarketPlace />} />,
    },
    {
      path: "/groups",
      element: <MainPage children={<Groups />} />,
    },
    {
      path: "/gaming",
      element: <MainPage children={<Gaming />} />,
    },
    {
      path: "*",
      element: <h1>Page Not Found</h1>,
    },
  ];

  return (
    <Routes>
      <Route
        path="/login"
        element={!login ? <Log children={<SignIn />} /> : <Navigate to="/" />}
      />
      <Route
        path="/signup"
        element={!login ? <Log children={<SignUp />} /> : <Navigate to="/" />}
      />

      {routes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={login ? route.element : <Navigate to="/login" />}
          />
        );
      })}
    </Routes>
  );
};

export default Routing;
