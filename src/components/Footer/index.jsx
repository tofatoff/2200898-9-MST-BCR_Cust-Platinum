import {
    FiFacebook,
    FiInstagram,
    FiTwitter,
    FiMail,
    FiTwitch
} from "react-icons/fi";
import './styles.css';
import LogoBCR from "../LogoBCR";
import { Container } from "reactstrap";

const Footer = () => {
    return (
        <footer className="py-5"
            style={{
                fontFamily: 'Arial',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '14px',
                lineHeight: '20px',
            }}
        >
            <Container className="d-flex justify-content-between">
                <address>
                    Jalan Suroyo No. 161 Mayangan Kota <br />Probolonggo 672000 <br />
                    binarcarrental@gmail.com <br />
                    081-233-334-808 <br />
                </address>
                <nav>
                    <ul>
                        <li>
                            <a href="#our-services">
                                Our Services
                            </a>
                        </li>
                        <li>
                            <a href="#why-us">
                                Why Us
                            </a>
                        </li>
                        <li>
                            <a href="#testimonial">
                                Testimonial
                            </a>
                        </li>
                        <li>
                            <a href="#faq">
                                FAQ
                            </a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <p>Connect with us</p>
                    <ul className="d-flex m-0 p-0">
                        <li className="socmed-container">
                            <a href="#">
                                <FiFacebook className='fi' />
                            </a>
                        </li>
                        <li className="socmed-container">
                            <a href="#">
                                <FiInstagram className='fi' />
                            </a>
                        </li>
                        <li className="socmed-container">
                            <a href="#">
                                <FiTwitter className='fi' />
                            </a>
                        </li>
                        <li className="socmed-container">
                            <a href="#">
                                <FiMail className='fi' />
                            </a>
                        </li>
                        <li className="socmed-container">
                            <a href="#">
                                <FiTwitch className='fi' />
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>Copyright Binar 2022</p>
                    <LogoBCR />
                </div>
            </Container>
        </footer>
    )
}

export default Footer