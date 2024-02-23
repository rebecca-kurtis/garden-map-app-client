import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import axios from "axios";
import styles from "../styles/Header.module.css";
import checkIfUserOwnsPlot from "../../helpers/checkIfUserOwnsPlot";

function Login(props) {

  const updateUserStorage = props.updateUserStorage;

  // console.log(updateUserStorage);

  const [show, setShow] = useState(false);
  // const [userID, setUserID] = useState(null);

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

  const id = useParams();
  const plot_id = id.id;
  console.log("plpeee", plot_id);
  // const user = props.user;
  const plotID = parseInt(plot_id);

  const usersRoute =
    process.env.REACT_APP_SERVER +
    ":" +
    process.env.REACT_APP_SERVER_PORT +
    "/login";

  const handleUserSubmit = (e) => {
    e.preventDefault();
    setForm(form);
    console.log("form", form);

    axios
      .post(usersRoute, form)
      .then((response) => {
        console.log("login response", response);
        // props.setUserID(response.data.user_id)
        // const data = response.data.loginKey;

        updateUserStorage(response.data[0].user_id);
        console.log("local storage:", localStorage)

        // checkIfUserOwnsPlot(plotID, response.data.user_id).then((data) => {
        //   console.log("data inside hook", data);
        //   props.setOwnsPlot(data.user_owns_plot);
        // });
        // props.setOwnsPlot(true);

        // setForm(data[0]);
        // toggleAccount();
        // setForm(data[0]);
        // getUserOrderInfo(response.data.cartKey)
        // console.log("formData", form);

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

      <Offcanvas className={styles.offCanvasContainer} show={show} onHide={handleClose} placement="end">
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
                onChange={(e) => setValue("password", e.target.value)}
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
