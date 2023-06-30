import React, { Fragment, useEffect, useState } from "react";
import classes from "./Payment.module.css";
import { Accordion, Button } from "react-bootstrap";
import "../../Accordion.css";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateBankName, getOrderCarId } from "../../redux/bayarSlice";
import moment from "moment";
import { useNavigate } from "react-router";
import BCAIcon from "../../assets/bca.svg";
import BNIIcon from "../../assets/bni.svg";
import MandiriIcon from "../../assets/mandiri.svg";

const PaymentComp = () => {
  const banks = [
    {
      id: "BCA",
      name: "BCA Transfer",
      isChecked: false,
      pathIcon: `${BCAIcon}`,
    },
    {
      id: "BNI",
      name: "BNI Transfer",
      isChecked: false,
      pathIcon: `${BNIIcon}`,
    },
    {
      id: "Mandiri",
      name: "Mandiri Transfer",
      isChecked: false,
      pathIcon: `${MandiriIcon}`,
    },
  ];

  const [bankID, setBankID] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector((state) => state.bankStore);
  const selectedCar = selector.getCarData;
  const updatedOrderedCar = selector.updateCar;
  const choosePayment = selector.bankName;

  const setTokenPaymentCar = () => {
    localStorage.setItem("start_Payment", new Date().toLocaleString());
  };

  const handleBankClick = (id) => {
    dispatch(updateBankName(id));
    setBankID(id);
  };

  const toPaymentConfirm = () => {
    navigate(`/paymentconfirm/${selectedCar.id}`);
    setTokenPaymentCar();
  };

  const orderCarId = () => {
    dispatch(getOrderCarId(updatedOrderedCar.id));
  };

  useEffect(() => {
    orderCarId();
  }, []);

  return (
    <Fragment>
      <section id="card-payment" className={`container ${classes.PaymenComp}`}>
        <div className="row justify-content-center">
          <div className="col-lg-7 g-4">
            <div className="card">
              <h6
                className="fw-bold mb-3 ms-4 mt-4"
                data-testid="heading-Card1"
              >
                Pilih Bank Transfer
              </h6>
              <p className="ms-4 mt-2">
                Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
                atau Mobile Banking
              </p>
              <form>
                <ul className="list-group list-group-flush mt-4">
                  {banks.map((bank) => (
                    <li
                      className={`list-group-item mx-3 d-flex justify-content-between ${classes.bankTransferPoint}`}
                      key={bank.id}
                      onClick={() => handleBankClick(bank.id)}
                    >
                      <div className="bankName d-flex my-2">
                        <img src={bank.pathIcon} alt={`icon-${bank.id}`} />
                        <p className={`my-auto ${classes.bankName}`}>
                          {bank.name}
                        </p>
                      </div>
                      {bank.id === bankID ? (
                        <div className="icon" style={{ margin: "auto 0" }}>
                          <FaCheck style={{ color: "5CB85F" }} />
                        </div>
                      ) : null}
                    </li>
                  ))}
                  <li className="list-group-item mb-3 d-flex"></li>
                </ul>
              </form>
            </div>
          </div>
          <div className="col-lg-5 g-4">
            <div className="card mt-2 mb-2">
              <h6 className="fw-bold mb-3 ms-4 mt-4">{selectedCar.name}</h6>
              <div className="carInfo">
                <i
                  className="bi bi-people ms-4"
                  style={{ fontStyle: "none" }}
                ></i>
                <span className="ms-2 text-secondary">
                  <small>
                    {selectedCar?.category?.toLowerCase() === "small"
                      ? "2 - 4 orang"
                      : null}{" "}
                    {selectedCar?.category?.toLowerCase() === "medium"
                      ? "4 - 6 orang"
                      : null}{" "}
                    {selectedCar?.category?.toLowerCase() === "large"
                      ? "6 - 8 orang"
                      : null}
                  </small>
                </span>
              </div>
              <Accordion className="mt-3 mb-1" defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="fw-bold">
                    <p className="fw-bold">
                      Total : Rp{" "}
                      {updatedOrderedCar?.total_price?.toLocaleString("id-ID")}
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <form>
                      <h6 className="fw-bold totalHarga">Harga</h6>
                      <ul className="mt-1 mb-3">
                        <div className="d-flex justify-content-between">
                          <li className="sewa">
                            Sewa Mobil Rp{" "}
                            {selectedCar?.price?.toLocaleString("id-ID")} x{" "}
                            {moment(updatedOrderedCar.finish_rent_at).diff(
                              moment(updatedOrderedCar.start_rent_at),
                              "days"
                            ) + 1}{" "}
                            Hari
                          </li>
                          <h6 className="totalSewa fw-bold">
                            {" "}
                            Rp{" "}
                            {updatedOrderedCar?.total_price?.toLocaleString(
                              "id-ID"
                            )}
                          </h6>
                        </div>
                      </ul>
                      <h6 className="fw-bold mt-3 biayaLainnya">
                        Biaya Lainnya
                      </h6>
                      <ul className="mt-3 mb-3">
                        <div className="d-flex justify-content-between">
                          <li className="pajak">Pajak</li>
                          <p className="text-success">Termasuk</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <li className="makanSopir">Biaya makan sopir</li>
                          <p className="text-success">Termasuk</p>
                        </div>
                      </ul>
                      <h6 className="fw-bold mt-3 belumTermasuk">
                        Belum Termasuk
                      </h6>
                      <ul className="mt-3 mb-3">
                        <li className="bensin">Bensin</li>
                        <li className="parkir mt-3">Tol dan parkir</li>
                      </ul>
                      <div className="d-flex justify-content-between">
                        <p className="fw-bold totalHarga">Total </p>
                        <p className="fw-bold">
                          Rp{" "}
                          {updatedOrderedCar?.total_price?.toLocaleString(
                            "id-ID"
                          )}
                        </p>
                      </div>
                      <Button
                        size="md"
                        onClick={toPaymentConfirm}
                        className={`w-100 ${classes.btnBayar}`}
                        disabled={!choosePayment}
                      >
                        Bayar
                      </Button>
                    </form>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PaymentComp;
