import React from "react";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import PaymentUpload from "../../components/PaymentUploadComp/PaymentUpload";

const Uploadpayment = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <PaymentUpload />
      </main>
      <Footer />
    </div>
  );
};

export default Uploadpayment;
