import imgCar from "../../assets/img_car.png";
import BtnCTA from "../BtnCTA";
import "./styles.css";

const Hero = (props) => {
  return (
    <section id="hero" className="">
      <div className="container">
        <div className="row">
          <div className="col hero-cta">
            <h1>Sewa & Rental Mobil Terbaik di kawasan Jakarta Utara</h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            {props.showBtnCTA && <BtnCTA />}
          </div>

          <img src={imgCar} alt="img car" className="col" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
