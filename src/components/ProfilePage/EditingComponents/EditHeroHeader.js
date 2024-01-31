import styles from "../../styles/ProfilePage/HeroHeader.module.css";
import userImage from "../../images/user-image.png";
import { useState, useEffect } from "react";
import axios from "axios";

export default function EditHeroHeader(props) {
  // const fName = props.profileInfo[0].fname;
  // const lName = props.profileInfo[0].lname;

  const [form, setForm] = useState({
    userID: props.profileInfo[0].user_id,
    first_name: props.profileInfo[0].fname,
    last_name: props.profileInfo[0].lname,
  });

  const [mode, setMode] = useState(true);

  // Set the value of a single element of the object
  const setValue = (key, value) => {
    setForm({ ...form, [key]: value });
  };
  const nameEditRoute =
    process.env.REACT_APP_SERVER +
    ":" +
    process.env.REACT_APP_SERVER_PORT +
    "/updateName";

  const handleUserSubmit = (e) => {
    e.preventDefault();

    axios.post(nameEditRoute, form)
    .then((response) => {
      console.log('response', response);
      setForm(form);
      setMode(true);
   
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

  const handleClick = () => {
    console.log("click");
    setMode(false);
  };

  if (mode === true) {
    return (
      <div className={styles.heroHeaderContainer}>
        <div className={styles.heroHeaderImageContainer}>
          <img src={userImage} alt="profile"></img>
        </div>
        <div className={styles.editHeroHeaderNameContainer}>
          <h1>
            {form.first_name} {form.last_name}
          </h1>
          <button onClick={handleClick} className={styles.editButton}>
            Edit
          </button>
        </div>
      </div>
    );
  }
  if (mode === false) {
    return (
      <div className={styles.heroHeaderContainer}>
        <div className={styles.heroHeaderImageContainer}>
          <img src={userImage} alt="profile"></img>
        </div>
        <div className={styles.heroHeaderNameContainer}>
          <h1>
            {form.first_name} {form.last_name}
          </h1>
          <form
            onSubmit={handleUserSubmit}
            className={styles.EditNameSectionForm}
          >
            <div className={styles.formInputsDiv}>
              <label className="form-label">First Name:</label>
              <input
                className={styles.inputTextName}
                type="text"
                name="first_name"
                value={form.first_name}
                placeholder="Enter your username"
                onChange={(e) => setValue("first_name", e.target.value)}
                required
              ></input>
              </div>
              <div className={styles.formInputsDiv}>
              <label className="form-label">Last Name:</label>
              <input
                className={styles.inputTextName}
                type="text"
                name="last_name"
                value={form.last_name}
                placeholder="Enter your username"
                onChange={(e) => setValue("last_name", e.target.value)}
                required
              ></input>
            </div>

            <button type="submit" className={styles.updateButton}>
              Update
            </button>
          </form>
        </div>
      </div>
    );
  }
}
