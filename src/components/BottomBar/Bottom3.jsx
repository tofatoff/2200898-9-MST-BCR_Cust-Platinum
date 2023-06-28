import React from "react";
import classes from "./Bottom.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import totalStep2 from "../../assets/Step2.svg";
import { useSelector } from "react-redux";

const Empty3 = () => {
  const navigate = useNavigate();
  const selector = useSelector((state) => state.bankStore);
  const updatedOrderedCar = selector.updateCar;
  const selectedCar = selector.getCarData;
  const choosePayment = selector.bankName;

  const orderID = updatedOrderedCar.id;
  const defaultCarID = selectedCar.id;
  const conversionOrderID = orderID?.toString() + defaultCarID?.toString();

  const toDetail = () => {
    navigate(`/payment/${selectedCar.id}`);
  };

  const bankChooseName = () => {
    if (choosePayment === "BCA") {
      return <p style={{ marginTop: "4px" }}>BCA Transfer</p>;
    } else if (choosePayment === "BNI") {
      return <p style={{ marginTop: "4px" }}>BNI Transfer</p>;
    } else if (choosePayment === "Mandiri") {
      return <p style={{ marginTop: "4px" }}>Mandiri Transfer</p>;
    }
  };

  return (
    <section className={classes.emptySection3} id="empty-section">
      <div className="container">
        <div className={classes.contentStep}>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div
              className={`d-flex justify-content-center w-50 ${classes.spaceStepMain}`}
              data-testid="content-infoBank"
            >
              <span
                className={`d-flex ${classes.spanToDetail}`}
                onClick={toDetail}
                data-testid="info-bankName"
              >
                <FaArrowLeft className="me-3 mt-2" />
                {bankChooseName()}
              </span>
            </div>
            <div
              className={`d-flex justify-content-center ms-2 w-50`}
              style={{ marginTop: "-15px" }}
              data-testid="content-order"
            >
              <p data-testid="order-test">Order ID : {conversionOrderID} </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center">
              <img
                src={totalStep2}
                alt="step-1"
                className={classes.spaceStepSecond}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empty3;
