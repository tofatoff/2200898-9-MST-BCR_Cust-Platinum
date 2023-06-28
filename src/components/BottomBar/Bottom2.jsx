import React from "react";
import classes from "./Bottom.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import totalStep1 from "../../assets/Step1.svg";
import { useSelector } from "react-redux";

const Empty2 = () => {
  const navigate = useNavigate();
  const selector = useSelector((state) => state.bankStore);
  const selectedCar = selector.getCarData;

  const toDetail = () => {
    navigate(`/detailCar/${selectedCar.id}`);
  };

  return (
    <section className={classes.emptySection} id="empty-section">
      <div className="container">
        <div className={classes.contentStep}>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div
              className={`d-flex justify-content-center w-50 ${classes.spaceStepMain}`}
              data-testid="content-text"
            >
              <span
                className={`d-flex ${classes.spanToDetail}`}
                onClick={toDetail}
              >
                <FaArrowLeft className="my-auto me-3" />
                <p className="my-auto" data-testid="test-paragraph">
                  Pembayaran
                </p>
              </span>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center">
              <img
                src={totalStep1}
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

export default Empty2;
