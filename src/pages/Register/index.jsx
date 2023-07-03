import imgLogin from "../../assets/img_login.png"
import logoLogin from "../../assets/Logo-login.svg";
import classes from "./register.module.css";
import React, { Fragment, useState } from "react";
import {
  Button,
  Form,
  Nav,
  InputGroup,
} from "react-bootstrap";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const [icon, setIcon] = useState(false);

    async function registerUser(params) {
        return fetch('https://api-car-rental.binaracademy.org/customer/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
    }

    const handlingEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handlingPassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    };

    const handlingName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
        setIcon(!icon);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)

        let params = {
            email: email,
            password: password,
            name: name
        }
        
        const response = await registerUser(params);
        
        const isSuccessful = response.ok;
        const data = await response.json()
            .then((result) => {
                if (!isSuccessful) {
                    setError(result.message);
                } else {

                    Swal.fire(
                        'Berhasil',
                        'Register telah berhasil, silahkan coba login',
                        'success'
                    ).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            window.location.replace('/login');
                        } else if (result.isDenied) {
                            Swal.fire('Silahkan ke halaman login', '', 'info')
                        }
                    })

                }
                setLoading(false)
            });

    };

    return (
        <Fragment>

            <div className="d-flex bg-light">
                <div className="col-lg-6 col-md-6">
                <div className="container justify-content-center align-self-center">
                    <div
                    className={`d-block ${classes.formControl} ustify-content-center`}
                    >
                    <div className="d-flex justify-content-between">
                        <Nav.Link
                        as={Link}
                        to="/"
                        className={`mb-5 w-25 Sign-In-brand`}
                        >
                        <img src={logoLogin} alt="Sign In BCR" />
                        </Nav.Link>
                    </div>
                    <h1 className="mb-5 fw-bold text-black">Sign UP!</h1>
                    {error ? (
                        <div
                        style={{
                            padding: "12px 25px",
                            background: "rgba(208, 12, 26, 0.1)",
                            borderRadius: "5px",
                            fontFamily: "Arial, sans-serif",
                            fontSize: "0.75rem",
                            lineHeight: 1.5,
                            marginBottom: "2rem",
                            color: "#D00C1A",
                        }}
                        >
                        Masukkan username dan password yang benar. Perhatikan
                        penggunaan huruf kapital.
                        </div>
                    ) : null}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="name"
                            placeholder=""
                            onChange={handlingName}
                        />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="example: emyunihbos@gmail.co.uk"
                            onChange={handlingEmail}
                        />
                        </Form.Group>
                        <Form.Label>Password</Form.Label>
                        <InputGroup className="mb-3">
                        <Form.Control
                            data-testid="change-password-button-control"
                            type={passwordShown ? "text" : "password"}
                            placeholder="6+ character"
                            onChange={handlingPassword}
                        />
                        <Button
                            data-testid="change-password-button"
                            variant="outline-primary"
                            id="button-addon2"
                            type="button"
                            onClick={togglePasswordVisibility}
                        >
                            {icon ? <FaEye /> : <FaEyeSlash />}
                        </Button>
                        </InputGroup>
                        <Button
                        variant="primary"
                        type="submit"
                        className={`w-100 mt-4 fw-bold ${classes.buttonSignUp}`}
                        disabled={loading}
                        >
                        {loading ? 'Loading...' : 'Sign Up'}
                        </Button>
                        <div className="d-flex mt-3 justify-content-center">
                        <p className="text-dark fs-6 me-4">Already have an account ?</p>
                        <a className={`me-4 fw-bold ${classes.linkA}`} href="/login">
                            Sign In here
                        </a>
                        </div>
                    </Form>
                    </div>
                </div>
                </div>
                <div className={`col-lg-6 col-md-6 background2 ${classes.background2}`}>
                <div className="sign-up-page" id="sign-up">
                    <div className="image-page d-flex justify-content-end">
                        <img
                        src={imgLogin}
                        alt="images-landing-page"
                        className={classes.imagesLandingPage}
                        />
                    </div>
                </div>
                </div>
            </div>
            
        </Fragment>
    )
}

export default Register