import React, { Fragment } from "react";
import { Form, Button, Tab, Tabs, InputGroup } from "react-bootstrap";
import classes from "./PaymentUpload.module.css";

import "./PaymentUpload.css";
import { FaCopy } from "react-icons/fa";

const PaymentUpload = () => {
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
                <div className="timeStamp" data-testid="time-Stamp">
                  <h6
                    className="fw-bold mb-3 ms-4 mt-4"
                    data-testid="title-CardUploadPayment"
                  >
                    Selesaikan Pembayaran sebelum
                  </h6>
                  <p className="ms-4"></p>
                </div>
                <div className="counterTime my-auto me-3">
                  <div className="countDownTimer mt-2 fw-bold"></div>
                </div>
              </div>
            </div>
            <div className="card AccountTransferBank mt-4">
              <h6 className="fw-bold mb-3 ms-4 mt-4">Lakukan Transfer Ke</h6>
              <div className="accountBank d-flex">
                <div className="logoBank ms-4"></div>
                <div className="accountDetail ms-4">
                  <p
                    style={{ marginTop: "-12px" }}
                    data-testid="account-BankName"
                  >
                    a.n Binar Car Rental
                  </p>
                </div>
              </div>
              <div className="accountNumber my-2">
                <div className="number ms-4 me-4">
                  <Form.Group className="mb-3" controlId="formAccountNumber">
                    <Form.Label>Nomor Rekening</Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control />
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
                    <Form.Label>Total Bayar</Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control />
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
                <Tab eventKey="bcaklik" title="BCA Klik" className="mx-4 mb-4">
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
              <div className="Wrapper time d-flex justify-content-between ">
                <div className="counterTime my-auto me-3">
                  <h6 className="fw-bold mb-3 ms-4 mt-3">
                    Konfirmasi Pembayaran
                  </h6>
                </div>
                <div className="counterTime my-auto me-3">
                  <div className="countDownTimer mt-2 fw-bold"></div>
                </div>
              </div>
              <div className="detailUploadPayment mb-3 ms-4 mt-2">
                <p className="paragraph statement me-5">
                  Terima kasih telah melakukan konfirmasi pembayaran.
                  Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit
                  untuk mendapatkan konfirmasi.
                </p>
                <h6 className="uploadPayment fw-bold mt-4">
                  Upload Bukti Pembayaran
                </h6>
                <p className="proofPayment mt-2 me-5">
                  Untuk membantu kami lebih cepat melakukan pengecekan. Kamu
                  bisa upload bukti bayarmu
                </p>
              </div>
              <div className="buttonConfirm mx-4 mb-4">
                <input type="file" name="file" />
              </div>
              <div className="buttonConfirm mx-4 mb-4">
                <Button>Upload</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PaymentUpload;
