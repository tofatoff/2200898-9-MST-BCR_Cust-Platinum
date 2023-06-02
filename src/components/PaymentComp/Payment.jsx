import React, { Fragment } from "react";
import classes from "./Payment.module.css";
import { Accordion, Button } from "react-bootstrap";
import "../../Accordion.css";
import { FaCheck } from "react-icons/fa";
import { banks } from "./databank";

const PaymentComp = () => {
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
                    >
                      <div className="bankName d-flex my-2"></div>
                      <div className="icon" style={{ margin: "auto 0" }}>
                        <FaCheck style={{ color: "5CB85F" }} />
                      </div>
                    </li>
                  ))}
                  <li className="list-group-item mb-3 d-flex"></li>
                </ul>
              </form>
            </div>
          </div>
          <div className="col-lg-5 g-4">
            <div className="card mt-2 mb-2">
              <h6 className="fw-bold mb-3 ms-4 mt-4"></h6>
              <div className="carInfo">
                <i
                  className="bi bi-people ms-4"
                  style={{ fontStyle: "none" }}
                ></i>
                <span className="ms-2 text-secondary">
                  <small></small>
                </span>
              </div>
              <Accordion className="mt-3 mb-1" defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="fw-bold">
                    <p className="fw-bold"></p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <form>
                      <h6 className="fw-bold totalHarga">Harga</h6>
                      <ul className="mt-1 mb-3">
                        <div className="d-flex justify-content-between">
                          <li className="sewa">Sewa Mobil Rp Hari</li>
                          <h6 className="totalSewa fw-bold"></h6>
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
                      <img alt="strip-pembayaran" className="w-100" />
                      <div className="d-flex justify-content-between">
                        <p className="fw-bold totalHarga">Total </p>
                        <p className="fw-bold"></p>
                      </div>
                      <Button size="md">Bayar</Button>
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
