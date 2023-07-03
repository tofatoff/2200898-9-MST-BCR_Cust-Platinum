import { Col, Row } from "reactstrap";
import PdfViewer from "../../components/Eticket/PdfViewer";
import Footer from "../../components/Footer";
import HeaderNav from "../../components/Navbar";
import "./style.css";
import imgNumber from "../../assets/icons/number-blue.png";
import imgCheck from "../../assets/icons/check-blue.png";
import imgRectangle from "../../assets/icons/rectangle.png";
import imgSucCheck from "../../assets/icons/success-check.png";
import { Container } from "react-bootstrap";

const Eticket = () => {
  return (
    <>
      <HeaderNav />
      <Row className="top-eticket">
        <div className="col-md-6 invoice-number">
          <p>Tiket</p>
          <p>Order ID: xxxxxxxx</p>
        </div>
        <div className="col-md-6 right-eticket">
          <span>
            <img src={imgCheck} className="icon" /> Pilih Metode
          </span>
          <span>
            <img src={imgRectangle} className="rectangle" />
          </span>
          <span>
            <img src={imgCheck} className="icon" /> Bayar
          </span>
          <span>
            <img src={imgRectangle} className="rectangle" />
          </span>
          <span>
            <img src={imgNumber} className="icon" /> Tiket
          </span>
        </div>
      </Row>
      <Container>
        <div className="row head-message">
          <img src={imgSucCheck} />
          <p className="head-notif">Pembayaran Berhasil!</p>
          <p className="head-note">Tunjukan invoice ini ke petugas BCR di titik temu</p>
        </div>
        <div className="pdf-viewer">
          <PdfViewer />
        </div>
        
      </Container>
      
      <Footer />
    </>
  );
};

export default Eticket;
