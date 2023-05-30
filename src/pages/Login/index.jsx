import { Col, Form, Row } from "reactstrap";
import imgLogin from "../../assets/img_login.png";
import LogoBCR from "../../components/LogoBCR";
import { useState } from "react";
import { setUserSession } from "../../utils/common";
import Swal from "sweetalert2";

async function loginUser(credentials) {
  return fetch("https://bootcamp-rent-cars.herokuapp.com/customer/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
}

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await loginUser({
      email: email,
      password: password,
    });

    const isSuccessful = response.ok;
    const data = await response.json().then((result) => {
      if (!isSuccessful) {
        setError(result.message);
      } else {
        Swal.fire("Berhasil", "Login telah berhasil", "success").then(
          (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              setUserSession(result);
              window.location.replace("/");
            } else if (result.isDenied) {
              Swal.fire("Login di batalkan", "", "info");
            }
          }
        );

        //ini kondisi login success,

        //redirect ke halaman mana jika login sukses
      }
      setLoading(false);
    });
  };

  return (
    <>
      <div className="container">
        <Row>
          <Col className="col-md-6">
            <LogoBCR />
            <Form onSubmit={handleSubmit}>
              {error && (
                <>
                  <small style={{ color: "red" }}>{error}</small>
                  <br />
                </>
              )}
              <br />
              <h1>Welcome Back</h1>
              <div className="form-outline mb-4">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  id="form2Example1"
                  className="form-control"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  id="form2Example2"
                  className="form-control"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                className="btn btn-primary btn-block mb-4"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : "Login"}{" "}
              </button>

              <div className="text-center">
                <p>
                  Don't have an account?{" "}
                  <a href="/register">Sign up for free</a>
                </p>
              </div>
            </Form>
          </Col>
          <Col className="col-md-6">
            <img src={imgLogin} alt="img login" className="col" />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
