import { useState } from "react";
import bcrypt from "bcryptjs-react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import axios from "axios";
import styles from "../styles/Header.module.css";
// import bcrypt from "bcrypt";
import checkIfUserOwnsPlot from "../../helpers/checkIfUserOwnsPlot";

function Login(props) {
  const updateUserStorage = props.updateUserStorage;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  // Set the value of a single element of the object
  const setValue = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  // const usersRoute =
  //   process.env.REACT_APP_SERVER +
  //   ":" +
  //   process.env.REACT_APP_SERVER_PORT +
  //   "/login";

    const usersRoute = process.env.REACT_APP_SERVER_URL + "/login";

  const handleUserSubmit = (e) => {
    e.preventDefault();
    setForm(form);

    

    axios
      .post(usersRoute, form)
      .then((response) => {
       
        if (response === null) {
          alert("Wrong password, please try again!")
        }

        updateUserStorage(response.data[0][0].user_id);
      
        return response.data;
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
      <Button className={styles.headerButton} onClick={handleShow}>
        Login
      </Button>

      <Offcanvas
        className={styles.offCanvasContainer}
        show={show}
        onHide={handleClose}
        placement="end"
      >
        <Offcanvas.Header className={styles.closeButton} closeButton>
          {/* <Offcanvas.Title></Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.offCanvasContainerBody}>
          <form onSubmit={handleUserSubmit} className="canva-body">
            <h2 className={styles.offCanvasH2}>Login to Edit Your Plot!</h2>
            <br></br>
            <br></br>
            <div className={styles.loginFormContainer}>
              <label className={styles.formLabel}>Username:</label>
              <input
                className={styles.inputText}
                type="text"
                name="username"
                value={form.username}
                placeholder="Enter your username"
                onChange={(e) => setValue("username", e.target.value)}
                required
              ></input>

              <label className={styles.formLabel}>Password:</label>
              <input
                className={styles.inputText}
                type="password"
                name="password"
                value={form.password}
                placeholder="Enter your password"
                onChange={(e) => {
                  setValue("password", e.target.value);
                }}
                required
              ></input>

              <button type="submit" className={styles.headerButtonLogin}>
                Login
              </button>
            </div>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Login;
