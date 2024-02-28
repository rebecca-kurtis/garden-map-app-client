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
    password: "",
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
    console.log("form", form);

    //hash the password

    // bcrypt
    //   .genSalt(10)
    //   .then((salt) => {
    //     console.log("Salt: ", salt);
    //     return bcrypt.hash(form.password, salt);
    //   })
    //   .then((hash) => {
    //     console.log("Hash: ", hash);
    //     const submitObj = {
    //       username: form.username,
    //       password: hash
    //     }
    //     // setForm({ password: hash });
    //     console.log("in hash", submitObj);
    //     return submitObj;
    //   })
    //   .then((obj) => {
    //     axios
    //       .post(usersRoute, obj)
    //       .then((response) => {
    //         // console.log("login response", response);

    //         updateUserStorage(response.data[0].user_id);
    //         // console.log("local storage:", localStorage)

    //         return response.data;
    //       })
    //       .catch((error) => {
    //         if (error.response) {
    //           alert(`Error! ${error.message}`);
    //         } else if (error.request) {
    //           console.log("network error");
    //         } else {
    //           console.log(error);
    //         }
    //       });
    //   })
    //   .catch((err) => console.error(err.message));

    axios
      .post(usersRoute, form)
      .then((response) => {
        // console.log("login response", response);

        updateUserStorage(response.data[0].user_id);
        // console.log("local storage:", localStorage)

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
                  // bcrypt
                  //   .genSalt(10)
                  //   .then((salt) => {
                  //     console.log("Salt: ", salt);
                  //     return bcrypt.hash(e.target.value, salt);
                  //   })
                  //   .then((hash) => {
                  //     console.log("Hash: ", hash);
                  //     setValue("password", hash);
                  //     console.log("in hash", form);
                  //   })
                  //   .catch((err) => console.error(err.message));
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
