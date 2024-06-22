import React, { useContext } from "react";
import { NavBarContext } from "../context/NavBarContext";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import HomePage from "./HomePage";

import IntroPage from "./IntroPage";

function MainPage() {
  const contextNavBar = useContext(NavBarContext);

  return (
    <>
      <Head />
      <HomePage />
        <IntroPage/>
      
      {contextNavBar.NavValue ? <NavBar /> : <></>}
    </>
  );
}

export default MainPage;
