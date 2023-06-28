import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import classes from "./SearchBar.module.css";
import Loading from "../Loading/Loader";

const SearchBar = () => {
  const params = {
    name: "",
    category: "",
    price: "",
    isRented: false,
  };

  const [values, setValues] = useState(params);
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  const handleInputName = (e) => {
    setValues({ ...values, name: e.target.value });
  };

  const handleInputPrice = (e) => {
    setValues({ ...values, price: e.target.value });
  };

  const handleInputCategory = (e) => {
    setValues({ ...values, category: e.target.value });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    navigate("/search-result", { state: values });

    setLoading(false);
  };

  useEffect(() => {
    setValues(values);
  }, []);

  return (
    <Fragment>
      <section id="searchBar" className={`searchBar ${classes.main}`}>
        <form onSubmit={handleSubmit}>
          <div className="container mt-1 d-flex justify-content-center">
            {loading ? (
              <Loading />
            ) : (
              <div className={`card p-4 ${classes.cardBar}`}>
                <div className="row">
                  <div className="col-lg-3 d-flex flex-column justify-content-between">
                    <label
                      className={`fw-bold ${classes.labelCar}`}
                      htmlFor="carName"
                    >
                      Nama Mobil
                    </label>
                    <input
                      onChange={handleInputName}
                      defaultValue={values.name}
                      className={`p-1 ${classes.sizeTag}`}
                      type="text"
                      id="carName"
                      name="carName"
                      placeholder="Ketik nama/type mobil"
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
                      onChange={handleInputCategory}
                      defaultValue={values.category}
                      className={classes.sizeTag}
                      id="category"
                      name="category"
                    >
                      <option value="" hidden>
                        {" "}
                        Masukkan Kapasitas Mobil
                      </option>
                      <option value="small"> 2 - 4 orang</option>
                      <option value="medium"> 4 - 6 orang</option>
                      <option value="large"> 6 - 8 orang</option>
                    </select>
                  </div>
                  <div className="col-lg-3 d-flex flex-column justify-content-between">
                    <label
                      className={`fw-bold ${classes.label}`}
                      htmlFor="price"
                    >
                      Harga
                    </label>
                    <select
                      onChange={handleInputPrice}
                      defaultValue={values.price}
                      className={classes.sizeTag}
                      id="price"
                      name="price"
                    >
                      <option value="" hidden>
                        Masukkan Harga Sewa /Hari
                      </option>
                      <option value="0-400000"> &#60; Rp 400.000</option>
                      <option value="400000-600000">
                        Rp 400.000 - Rp 600.000
                      </option>
                      <option value="600000"> &#62; Rp 600.000 </option>
                    </select>
                  </div>

                  <div className="col-lg-2 d-flex flex-column justify-content-between">
                    <label
                      className={`fw-bold ${classes.label}`}
                      htmlFor="status"
                    >
                      Status
                    </label>
                    <select
                      className={`p-1 ${classes.sizeTag}`}
                      name="status"
                      id="status"
                    >
                      <option value="sedia">Sedia</option>
                    </select>
                  </div>

                  <div className="col-lg-1 d-flex align-items-end mt-3">
                    <button className={`p-1 ${classes.btnSearch}`}>
                      Cari Mobil
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default SearchBar;
