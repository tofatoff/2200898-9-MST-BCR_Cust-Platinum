import React, { Fragment, useEffect, useState } from "react";
import classes from "./Car.module.css";
import Loading from "../Loading/Loader";
import axios from "axios";
import BASE_API from "../BASE_API";

const Car = (props) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState();
  const BASE_URL = `${BASE_API}/admin/v2/car`;
  const { name, category, price, isRented } = props;

  const SplitPrice = price?.split("-");

  const handlerFilterCar = async () => {
    try {
      setLoading(true);
      const config = {
        headers: {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY3NTUxNjE1MH0.GWyuCrZVA5HuA3ODVAvgXj5GxoP82BnkUM_rJSuMi5A",
        },
        params: {
          name,
          category,
          minPrice: SplitPrice[0],
          maxPrice: SplitPrice[1],
          isRented,
        },
      };
      const { data } = await axios.get(`${BASE_URL}`, config);

      setCars(data.cars);
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    handlerFilterCar();
  }, []);

  return (
    <Fragment>
      <section id="card-car" className={`container ${classes.containerBottom}`}>
        {loading ? (
          <Loading />
        ) : (
          <div
            className="row justify-content-evenly"
            data-testid="container-Content"
          >
            {cars.length ? (
              cars?.map((item) => (
                <div className="col-lg-4 col-md-6 col-sm-12 g-4" key={item.id}>
                  <div className={`card ${classes.cardBox}`}>
                    <div
                      className={`align-self-center mt-4 mb-3 ${classes.wrapperImage}`}
                    >
                      <img
                        src={item.image}
                        className="card-img rounded-1"
                        alt={`images-${item.id}`}
                      />
                    </div>
                    <div className="card-body align-self-center mt-2 mb-2">
                      <h5 className="card-title ">{item.name}</h5>
                      <h5 className="card-title fw-bold">
                        Rp {item?.price?.toLocaleString("id-ID")} / Hari
                      </h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a
                        className="text-decoration-none"
                        href={`/detail/${item.id}`}
                      >
                        <button className={`w-100 ${classes.btnCard}`}>
                          Pilih Mobil
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <Fragment>
                <div className="containerEmptyData d-flex justify-content-center mt-3">
                  <h3 className="titleEmptyData fw-bold">
                    Ups, Sorry ! Data is Empty
                  </h3>
                </div>
                <div className="containerDescription d-flex justify-content-center">
                  <h6 className="titleDescription">Please try again !</h6>
                </div>
              </Fragment>
            )}
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default Car;
