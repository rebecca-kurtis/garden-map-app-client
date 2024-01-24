import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  // Set the value of a single element of the object
  const setValue = (key, value) => {
    setForm({...form, [key]: value})
  }

  const usersRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/login"

  const handleUserSubmit = (e) => {
    e.preventDefault();
    setForm(form)

    axios.post(usersRoute, form)
    .then((response) => {
      console.log('response', response);
      const data = response.data.loginKey;
  
      // updateUserStorage(data[0]);

      setForm(data[0]);
      // toggleAccount();
      // setForm(data[0]);
      // getUserOrderInfo(response.data.cartKey)
      console.log("formData", form);

      return response.data
    })
    .catch((error) => {
      if (error.response) {
        alert(`Error! ${error.message}`);
      } else if (error.request) {
        console.log("network error");
      } else {
        console.log(error);
      }
    });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form onSubmit={handleUserSubmit} className="canva-body">
            <h2>Login</h2>
            <br></br>
            <br></br>
            <label className="form-label">Email</label>
            <input
              className="input-text"
              type="text"
              name="username"
              value={form.username}
              placeholder="Enter your username"
              onChange={(e) => setValue("username", e.target.value)}
              required
            ></input>

            <label className="form-label">Password</label>
            <input
              className="input-text"
              type="password"
              name="password"
              value={form.password}
              placeholder="Enter your password"
              onChange={(e) => setValue("password", e.target.value)}
              required
            ></input>

            <button type="submit" className="main_button">
              Login
            </button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Login;
