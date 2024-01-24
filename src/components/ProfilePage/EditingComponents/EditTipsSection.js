import styles from "../../styles/ProfilePage/TipsSection.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function EditTipsSection(props) {
  const [form, setForm] = useState({
    tip: "",
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

  const tipsArray = [];

  for (const obj in props.profileInfo) {
    tipsArray.push(props.profileInfo[obj].tdescription);
  }
  function removeTipsDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
  }

  const newTipsArray = removeTipsDuplicates(tipsArray);

  const mappedTips = newTipsArray.map((tip, index) => (
    <li className={styles.plantsGrowingLiContainer} key={index}>
      <p>{tip}</p>
    </li>
  ));

  const editMappedTips = newTipsArray.map((tip, index) => (
    <li className={styles.plantsGrowingLiContainer} key={index}>
      {/* <p>{tip}</p> */}
      <textarea
              className={styles.inputTextTips}
              type="text"
              name="tip"
              value={tip}
              placeholder="Update Tip"
              onChange={(e) => setValue("tip", e.target.value)}
              required
            ></textarea>
    </li>
  ));

  if (mode === true) {
    return (
      <div className={styles.tipsSectionContainer}>
        <div className={styles.editTipsHeader}>
          <h2 className={styles.tipsSectionContainerH2}>Tips:</h2>
          <button onClick={handleClick} className={styles.tipsButton}>
            Edit
          </button>
        </div>
        <ul>{mappedTips}</ul>
      </div>
    );
  }

  if (mode === false) {
    return (
      <div className={styles.tipsSectionContainer}>
        <div className={styles.editTipsHeader}>
          <h2 className={styles.tipsSectionContainerH2}>Tips:</h2>
        </div>
        Edit Tips Section:
        <form
          onSubmit={handleUserSubmit}
          className={styles.EditAboutSectionForm}
        >
          <ul>{editMappedTips}</ul>
          <button type="submit" className={styles.tipsButton}>
            Update
          </button>
        </form>
      </div>
    );
  }
}
