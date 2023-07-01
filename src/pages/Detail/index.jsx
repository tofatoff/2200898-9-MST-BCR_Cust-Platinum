import React from "react";
import HeaderNav from "../../components/Navbar/index";
import Detailcar from "../../components/Detail/Detailcar";
import Bottom from "../../components/BottomBar/Bottom";
import Footer from "../../components/Footer/index";
import LockBar from "../../components/BottomBar/Lockbar";

const Detail = () => {
  return (
    <div>
      <header>
        <HeaderNav />
        <Bottom />
      </header>
      <main>
        <LockBar />
        <Detailcar />
      </main>
      <Footer />
    </div>
  );
};

export default Detail;
