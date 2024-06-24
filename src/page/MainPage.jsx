import React, { useContext } from "react";
import { NavBarContext } from "../context/NavBarContext";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import HomePage from "./HomePage";

import IntroPage from "./IntroPage";
import AuraPage from "./AuraPage";
import ProgPage from "./ProgPage";

function MainPage() {
  const contextNavBar = useContext(NavBarContext);

  return (
    <>
      <Head />
      <HomePage />
      <IntroPage />
      <AuraPage />
      <ProgPage />
      {contextNavBar.NavValue ? <NavBar /> : <></>}
    </>
  );
}

export default MainPage;
