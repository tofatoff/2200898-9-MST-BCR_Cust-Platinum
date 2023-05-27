import { Col, Form, Row, Toast } from "reactstrap"
import imgLogin from "../../assets/img_login.png"
import LogoBCR from "../../components/LogoBCR"
import { useEffect, useState } from "react"
import { setUserSession } from "../../utils/common"
import Swal from 'sweetalert2'

const Register = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function registerUser(params) {
        return fetch('https://bootcamp-rent-cars.herokuapp.com/customer/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
    }

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
        <>

            <div className="container">

                <Row>
                    <Col className="col-md-6">
                        <LogoBCR />
                        <Form onSubmit={handleSubmit}>

                            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />

                            <h1>Sign UP</h1>

                            <div className="form-outline mb-4">
                                <label className="form-label">Name</label>
                                <input type="name" id="form2Example1" className="form-control" name="name" onChange={e => setName(e.target.value)} />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label">Email</label>
                                <input type="email" id="form2Example2" className="form-control" name="email" onChange={e => setEmail(e.target.value)} />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label">Create Password</label>
                                <input type="password" id="form2Example2" className="form-control" name="password" onChange={e => setPassword(e.target.value)} />
                            </div>

                            <button className="btn btn-primary btn-block mb-4" type="submit" disabled={loading} >{loading ? 'Loading...' : 'Sign Up'} </button>

                            <div className="text-center">
                                <p>Already have an account<a href="/login">Sign In here</a></p>
                            </div>
                        </Form>

                    </Col>
                    <Col className="col-md-6">
                        <img src={imgLogin} alt="img login" className='col' />
                    </Col>
                </Row>
            </div>

        </ >
    )
}

export default Register