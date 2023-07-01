import React from "react";
import HeaderNav from "../../../components/Navbar/index";
import Car from "../../../components/Detail/Car";
import Footer from "../../../components/Footer";
import Bottom from "../../../components/BottomBar/Bottom";
import LockBar from "../../../components/BottomBar/Lockbar";
import { useLocation } from "react-router";

const ResultCar = () => {
  const { state } = useLocation();

  return (
    <div>
      <header>
        <HeaderNav />
        <Bottom />
      </header>
      <main>
        <LockBar />
        <Car {...state} />
      </main>
      <Footer />
    </div>
  );
};

export default ResultCar;
