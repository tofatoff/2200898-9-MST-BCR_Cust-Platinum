import React from "react";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import PaymentComp from "../../components/PaymentComp/Payment";

const Payment = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <PaymentComp />
      </main>
      <Footer />
    </div>
  );
};

export default Payment;
