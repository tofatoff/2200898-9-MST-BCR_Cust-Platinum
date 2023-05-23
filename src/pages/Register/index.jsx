import { Col, Form, Row } from "reactstrap"
import imgLogin from "../../assets/img_login.png"
import LogoBCR from "../../components/LogoBCR"
import { useState } from "react"
import { setUserSession } from "../../utils/common"

const Register = () => {

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

                            <button className="btn btn-primary btn-block mb-4" type="submit" disabled={loading} >{loading ? 'Loading...' : 'Login'} </button>

                            <div className="text-center">
                                <p>Already have an account<a href="#!">Sign In here</a></p>
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