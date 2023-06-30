import React from "react";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import PaymentConfirmComp from "../../components/PaymentConfirmComp/PaymentConfirm";
import Descbar from "../../components/BottomBar/Descbar";
import Bottom2 from "../../components/BottomBar/Bottom2";

const PaymentConfirm = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Bottom2 />
      </header>
      <main>
        <Descbar />
        <PaymentConfirmComp />
      </main>
      <Footer />
    </div>
  );
};

export default PaymentConfirm;
