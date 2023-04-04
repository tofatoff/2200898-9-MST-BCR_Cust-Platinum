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
            <Container className="d-flex justify-content-between flex-column flex-lg-row">
                <address
                    style={{
                        marginBottom: '16px',
                    }}
                >
                    Jalan Suroyo No. 161 Mayangan Kota <br />Probolonggo 672000 <br />
                    binarcarrental@gmail.com <br />
                    081-233-334-808 <br />
                </address>
                <nav
                    style={{
                        margin: '0',
                        marginBottom: '16px',
                        padding: '0',
                        textDecoration: 'none',
                        listStyleType: 'none',
                        fontFamily: 'Arial',
                        fontSize: '14px',
                        fontWeight: '400',
                        lineHeight: '20px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        borderBottom: 'none',
                    }}
                >
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
                <div
                    style={{
                        marginBottom: '16px',
                    }}
                >
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
                <div
                    style={{
                        marginBottom: '16px',
                    }}
                >
                    <p>Copyright Binar 2022</p>
                    <LogoBCR />
                </div>
            </Container>
        </footer>
    )
}

export default Footer