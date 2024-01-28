import styles from "../../styles/ProfilePage/HeroHeader.module.css";
import userImage from "../../images/user-image.png";
import { useState, useEffect } from "react";
import axios from "axios";

export default function EditHeroHeader(props) {
  const userName = props.profileInfo[0].user_name;

  const [form, setForm] = useState({
    name: userName,
  });

  const [mode, setMode] = useState(true);

  // Set the value of a single element of the object
  const setValue = (key, value) => {
    setForm({ ...form, [key]: value });
  };
  const aboutEditRoute =
    process.env.REACT_APP_SERVER +
    ":" +
    process.env.REACT_APP_SERVER_PORT +
    "/updateAbout/:id";

  const handleUserSubmit = (e) => {
    e.preventDefault();
    setForm(form);
    setMode(true);

    // axios.post(usersRoute, form)
    // .then((response) => {
    //   console.log('response', response);
    //   const data = response.data.loginKey;

    //   // updateUserStorage(data[0]);

    //   setForm(data[0]);
    //   // toggleAccount();
    //   // setForm(data[0]);
    //   // getUserOrderInfo(response.data.cartKey)
    //   console.log("formData", form);

    //   return response.data
    // })
    // .catch((error) => {
    //   if (error.response) {
    //     alert(`Error! ${error.message}`);
    //   } else if (error.request) {
    //     console.log("network error");
    //   } else {
    //     console.log(error);
    //   }
    // });
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
      <div className={styles.heroHeaderNameContainer}>
        <h1>{form.name}</h1>
        <button onClick={handleClick} className={styles.editButton}>Edit</button>
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
        <h1>{form.name}</h1>
        <form onSubmit={handleUserSubmit} className={styles.EditNameSectionForm}>
      <label className="form-label">Name:</label>
            <input
              className={styles.inputTextName}
              type="text"
              name="name"
              value={form.name}
              placeholder="Enter your username"
              onChange={(e) => setValue("name", e.target.value)}
              required
            ></input>
            <button type="submit" className={styles.editButton}>
              Update
            </button>
      </form>
      </div>
    </div>
  );
}
}