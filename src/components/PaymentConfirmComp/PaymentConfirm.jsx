import React, { useEffect, useState, Fragment } from "react";
import { Form, Button, Tab, Tabs, InputGroup } from "react-bootstrap";
import classes from "./PaymentConfirm.module.css";
import BCAIcon from "../Images/bca.svg";
import BNIIcon from "../Images/bni.svg";
import MandiriIcon from "../Images/mandiri.svg";
import "./PaymentConfirm.css";
import { FaCopy } from "react-icons/fa";
import { useNavigate } from "react-router";

const PaymentConfirm = () => {
  const navigate = useNavigate();

  const bankChooseName = () => {
    if (choosePayment === "BCA") {
      return <p>BCA Transfer</p>;
    } else if (choosePayment === "BNI") {
      return <p>BNI Transfer</p>;
    } else if (choosePayment === "Mandiri") {
      return <p>Mandiri Transfer</p>;
    }
  };

  return (
    <Fragment>
      <section
        id="confirm-payment"
        className={`container ${classes.cardConfirmPayment}`}
      >
        <div className="row justify-content-center">
          <div className="col-lg-7 g-4">
            <div className="card countTime">
              <div className="Wrapper time d-flex justify-content-between ">
                <div className="timeStamp">
                  <h6
                    className="fw-bold mb-3 ms-4 mt-4"
                    data-testid="heading-Title1"
                  >
                    Selesaikan Pembayaran sebelum
                  </h6>
                  <p className="ms-4"></p>
                </div>
                <div className="counterTime my-auto me-3">
                  <div
                    className="countDownTimer mt-2 fw-bold"
                    id="countDown-1"
                  ></div>
                </div>
              </div>
            </div>
            <div className="card AccountTransferBank mt-4">
              <h6 className="fw-bold mb-3 ms-4 mt-4">Lakukan Transfer Ke</h6>
              <div className="accountBank d-flex">
                <div className="logoBank ms-4"></div>
                <div className="accountDetail ms-4">
                  <p style={{ marginTop: "-12px" }}>a.n Binar Car Rental</p>
                </div>
              </div>
              <div className="accountNumber my-2">
                <div className="number ms-4 me-4">
                  <Form.Group className="mb-3" controlId="formAccountNumber">
                    <Form.Label
                      className={`text-secondary ${classes.labelSize}`}
                    >
                      Nomor Rekening
                    </Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="54104257877"
                        disabled
                        className={classes.formCustomBackground}
                      />{" "}
                      <Button
                        variant="outline-secondary"
                        id="button-addon2"
                        className="disable"
                      >
                        <FaCopy />
                      </Button>
                    </InputGroup>
                  </Form.Group>
                </div>
                <div className="totalCost ms-4 me-4">
                  <Form.Group className="mb-3" controlId="formAccountNumber">
                    <Form.Label
                      className={`text-secondary ${classes.labelSize}`}
                    >
                      Total Bayar
                    </Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control
                        className={`fw-bold text-dark ${classes.formCustomBackground}`}
                      />
                      <Button
                        variant="outline-secondary"
                        id="button-addon2"
                        className="disable"
                      >
                        <FaCopy />
                      </Button>
                    </InputGroup>
                  </Form.Group>
                </div>
              </div>
            </div>
            <div className="card optionPayment mt-4">
              <h6 className="fw-bold mb-3 ms-4 mt-4">Instruksi Pembayaran</h6>
              <Tabs
                defaultActiveKey="atmBca"
                id="fill-tab-example"
                className="mb-3 mx-4"
                justify
              >
                <Tab eventKey="atmBca" title="ATM BCA" className="mx-4 mb-4">
                  <li>Masukkan kartu ATM, lalu PIN</li>
                  <li>
                    Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA
                    Virtual Account”
                  </li>
                  <li>
                    Masukkan nomor BCA Virtual Account: 70020+Order ID
                    <br />
                    <span className="ms-4">Contoh:</span>
                    <br />
                    <span className="ms-4">
                      No. Peserta: 12345678, maka ditulis 7002012345678
                    </span>
                  </li>
                  <li>
                    Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk
                    menyelesaikan transaksi
                  </li>
                  <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                </Tab>
                <Tab eventKey="m-bca" title="M-BCA" className="mx-4 mb-4">
                  <li>Pilih m-transfer</li>
                  <li>Masukkan Nomor Order ID</li>
                  <li>Masukkan Jumlah Nominal Harga</li>
                  <li>
                    Periksa informasi yang tertera di layar. Pastikan Merchant
                    sudah sesuai
                  </li>
                  <li>
                    Masukkan PIN m-BCA dan pilih <strong>OK</strong>
                  </li>
                  <li>
                    Jika muncul notifikasi{" "}
                    <strong>
                      "Transaksi Gagal. Nominal melebihi limit harian"
                    </strong>
                    , mohon ulangi transaksi menggunakan klik BCA (iBanking)
                    atau ATM
                  </li>
                </Tab>
                <Tab eventKey="bca1" title="BCA1" className="mx-4 mb-4">
                  <li>Masukkan nomor rekening tujuan</li>
                  <li>Masukkan Order ID</li>
                  <li>Masukkan Jumlah nominal harga</li>
                  <li>Tulis berita transfer jika diperlukan</li>
                  <li>Pilih jenis transfer</li>
                  <li>Lakukan konfirmasi dengan token BCA APPL 2 dan APPL 1</li>
                  <li>Transaksi selesai dan simpanlah bukti transfer</li>
                </Tab>
                <Tab
                  eventKey="internetBanking"
                  title="Internet Banking"
                  className="mx-4 mb-4"
                >
                  <li>Pilih Transfer Dana</li>
                  <li>Masukkan Nomor Order ID</li>
                  <li>Masukkan Jumlah Nominal Harga</li>
                  <li>
                    Periksa informasi yang tertera di layar. Pastikan Merchant
                    sudah sesuai
                  </li>
                  <li>Masukkan respon KeyBCA dan klik kirim</li>
                </Tab>
              </Tabs>
            </div>
          </div>
          <div className="col-lg-5 g-4">
            <div className="card">
              <p className="mb-3 mx-4 mt-4">
                Klik Konformasi Pembayaran untuk mempercepat proses pengecekan
              </p>
              <div className="buttonConfirm mx-4 mb-4">
                <Button size="md">Konfirmasi Pembayaran</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PaymentConfirm;
