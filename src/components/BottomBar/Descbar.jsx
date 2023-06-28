import React, { Fragment } from "react";
import classes from "./Descbar.module.css";
import { useSelector } from "react-redux";
import moment from "moment";

const Descbar = () => {
  const selector = useSelector((state) => state.bankStore);
  const selectedCar = selector.getCarData;
  const updatedOrderedCar = selector.updateCar;

  return (
    <Fragment>
      <section id="searchBar" className={`searchBar ${classes.mainEmpty2}`}>
        <div className="container mt-1 d-flex justify-content-center">
          <div className={`card p-4 ${classes.cardBar}`}>
            <div className="row">
              <p className="fs-6 fw-bold" style={{ marginTop: "-10px" }}>
                Detail Pesananmu
              </p>
              <div className="col-lg-3 d-flex flex-column justify-content-between">
                <label
                  className={`fw-bold ${classes.labelCar}`}
                  htmlFor="carName"
                >
                  Nama Mobil
                </label>
                <p className={`p-1 text-secondary ${classes.sizeTag}`}>
                  {selectedCar.name}
                </p>
              </div>
              <div className="col-lg-3 d-flex flex-column justify-content-between">
                <label
                  className={`fw-bold ${classes.label}`}
                  htmlFor="category"
                >
                  Kategori
                </label>
                <p className={`p-1 text-secondary ${classes.sizeTag}`}>
                  {selectedCar?.category?.toLowerCase() === "small"
                    ? "2 - 4 orang"
                    : null}
                  {selectedCar?.category?.toLowerCase() === "medium"
                    ? "4 - 6 orang"
                    : null}
                  {selectedCar?.category?.toLowerCase() === "large"
                    ? "6 - 8 orang"
                    : null}
                </p>
              </div>
              <div className="col-lg-3 d-flex flex-column justify-content-between">
                <label className={`fw-bold ${classes.label}`} htmlFor="price">
                  Tanggal Mulai Sewa
                </label>
                <p className={`p-1 text-secondary ${classes.sizeTag}`}>
                  {moment(updatedOrderedCar.start_rent_at).format(
                    "DD MMMM YYYY"
                  )}
                </p>
              </div>
              <div className="col-lg-3 d-flex flex-column justify-content-between">
                <label className={`fw-bold ${classes.label}`} htmlFor="status">
                  Tanggal Akhir Sewa
                </label>
                <p className={`p-1 text-secondary ${classes.sizeTag}`}>
                  {moment(updatedOrderedCar.finish_rent_at).format(
                    "DD MMMM YYYY"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Descbar;
