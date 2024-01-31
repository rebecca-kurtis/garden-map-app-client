import styles from "../../styles/ProfilePage/AboutSection.module.css";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function EditAboutSection(props) {

  const [form, setForm] = useState({
    userID: props.profileInfo[0].user_id,
    description: props.profileInfo[0].udescription
  });


  const [mode, setMode] = useState(true);

  // Set the value of a single element of the object
  const setValue = (key, value) => {
    setForm({...form, [key]: value})
  }
  const aboutEditRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/updateAbout"

  const handleUserSubmit = (e) => {
    e.preventDefault();

    axios.post(aboutEditRoute, form)
    .then((response) => {
      setForm(form)
      setMode(true);

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
}

if (mode === true) {
  return (
    <div className={styles.aboutSectionContainer}>
      <div className={styles.EditAboutHeader}>
      <h2 className={styles.aboutH2}>About the Plot:</h2>
      <button onClick={handleClick} className={styles.saveButton}>Edit</button>
      </div>
      <p className={styles.aboutP}>{form.description}</p>
      
      </div>
  );
}
if (mode === false) {
  return (
    <div className={styles.aboutSectionContainer}>
      <h2 className={styles.aboutH2}>About the Plot:</h2>

      <form onSubmit={handleUserSubmit} className={styles.EditAboutSectionForm}>
      <label className="form-label">Update About Section:</label>
            <textarea
              className={styles.inputTextAbout}
              type="text"
              name="description"
              value={form.description}
              placeholder="Enter your username"
              onChange={(e) => {
                setValue("description", e.target.value)
              }}
              required
            ></textarea>
            <button type="submit" className={styles.saveButton}>
              Update About Section
            </button>
      </form>
    </div>
  );
}
}