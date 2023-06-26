import React from "react";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import PaymentConfirmComp from "../../components/PaymentConfirmComp/PaymentConfirm";

const PaymentConfirm = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <PaymentConfirmComp />
      </main>
      <Footer />
    </div>
  );
};

export default PaymentConfirm;
