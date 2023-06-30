import React from "react";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import PaymentComp from "../../components/PaymentComp/Payment";
import Descbar from "../../components/BottomBar/Descbar";
import Bottom2 from "../../components/BottomBar/Bottom2";

const Payment = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Bottom2 />
      </header>
      <main>
        <Descbar />
        <PaymentComp />
      </main>
      <Footer />
    </div>
  );
};

export default Payment;
