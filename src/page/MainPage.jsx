import React, { useContext } from "react";
import { NavBarContext } from "../context/NavBarContext";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import HomePage from "../components/HomePage";
import MoveNextHome from "../components/MoveNextHome";

function MainPage() {
  const contextNavBar = useContext(NavBarContext);

  return (
    <>
      <Head />
      <HomePage />

      <MoveNextHome />
      {contextNavBar.NavValue ? <NavBar /> : <></>}
    </>
  );
}

export default MainPage;
