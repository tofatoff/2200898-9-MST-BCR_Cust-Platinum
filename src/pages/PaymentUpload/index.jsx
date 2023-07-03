import React from "react";
import HeaderNav from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import PaymentUpload from "../../components/PaymentUploadComp/PaymentUpload";
import Bottom3 from "../../components/BottomBar/Bottom3";

const Uploadpayment = () => {
  return (
    <div>
      <header>
        <HeaderNav />
        <Bottom3 />
      </header>
      <main>
        <PaymentUpload />
      </main>
      <Footer />
    </div>
  );
};

export default Uploadpayment;
