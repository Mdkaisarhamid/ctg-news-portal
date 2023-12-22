import React from "react";
import Header from "../../Pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import NavigationBar from "../../Pages/Home/NavigationBar/NavigationBar";

const LoginLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;

<Header></Header>;
<Outlet></Outlet>;
