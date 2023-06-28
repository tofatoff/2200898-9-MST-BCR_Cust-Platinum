import React, { Fragment } from "react";
import classes from "./Descbar.module.css";
import { useNavigate } from "react-router";

const LockBar = () => {
  const navigate = useNavigate();

  const toSearchCars = () => {
    navigate("/searchCars");
  };

  return (
    <Fragment>
      <section id="searchBar" className={`searchBar ${classes.main}`}>
        <div className="container mt-1 d-flex justify-content-center">
          <div className={`card p-4 ${classes.cardBar}`}>
            <div className="row">
              <p className="fs-6 fw-bold" style={{ marginTop: "-20px" }}>
                Pencarianmu
              </p>
              <div className="col-lg-3 d-flex flex-column justify-content-between">
                <label
                  className={`fw-bold ${classes.labelCar}`}
                  htmlFor="carName"
                >
                  Nama Mobil
                </label>
                <input
                  className={`p-1 ${classes.sizeTag}`}
                  type="text"
                  id="carName"
                  name="carName"
                  disabled
                />
              </div>
              <div className="col-lg-3 d-flex flex-column justify-content-between">
                <label
                  className={`fw-bold ${classes.label}`}
                  htmlFor="category"
                >
                  Kategori
                </label>
                <select
                  className={classes.sizeTag}
                  id="category"
                  name="category"
                  disabled
                >
                  <option value="" hidden>
                    Masukkan Kapasitas Mobil
                  </option>
                </select>
              </div>
              <div className="col-lg-3 d-flex flex-column justify-content-between">
                <label className={`fw-bold ${classes.label}`} htmlFor="price">
                  Harga
                </label>
                <select
                  className={classes.sizeTag}
                  id="price"
                  name="price"
                  disabled
                >
                  <option value="" hidden>
                    Masukkan Harga Sewa per Hari
                  </option>
                </select>
              </div>

              <div className="col-lg-2 d-flex flex-column justify-content-between">
                <label className={`fw-bold ${classes.label}`} htmlFor="status">
                  Status
                </label>
                <select
                  className={`p-1 ${classes.sizeTag}`}
                  name="status"
                  id="status"
                  disabled
                >
                  <option value="sedia">Sedia</option>
                </select>
              </div>

              <div className="col-lg-1 d-flex align-items-end mt-3">
                <button
                  onClick={toSearchCars}
                  className="btn btn-outline-primary w-100 col-sm-12 mt-4"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LockBar;
