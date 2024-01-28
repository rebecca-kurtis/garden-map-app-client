import styles from "../../styles/ProfilePage/PlantsGrowing.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function EditPlantsGrowing(props) {
  const plantsArray = props.plants;
  const plantInfoArray = props.plantInfo;
  const plantsIcons = [];
  const plotID = parseInt(props.plotID);

  for (let plotObject in plantsArray) {
    for (let plantInfoObject in plantInfoArray) {
      if (
        plantsArray[plotObject].plot_id === plotID &&
        plantsArray[plotObject].plant_id ===
          plantInfoArray[plantInfoObject].plant_id
      ) {
        plantsIcons.push([plantInfoArray[plantInfoObject].name, plantInfoArray[plantInfoObject].photo_url]);
      }
    }
  }
  const [form, setForm] = useState({
    plotID: plotID,
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



  const mappedIcons = plantsIcons.map((array, index) => (
    <li className={styles.plantsGrowingLiContainer} key={index}>
      <span className={styles.roundCircleLi}>&#9679;</span>
      <img
        className={styles.plantsGrowingIconImage}
        src={require(".././../images/PlantIcons/" + array[1] + ".png")}
        alt="icon"
      ></img>
      <p>{array[0]}</p>
    </li>
  ));

  const editMappedIcons = plantsIcons.map((array, index) => (
    <li className={styles.plantsGrowingLiContainer} key={index}>
      <span className={styles.roundCircleLi}>&#9679;</span>
      <img
        className={styles.plantsGrowingIconImage}
        src={require(".././../images/PlantIcons/" + array[1] + ".png")}
        alt="icon"
      ></img>
      <p>{array[0]}</p>
    </li>
  ));

  if (mode === true) {

  return (
    <div className={styles.plantsGrowingContainer}>
      <h2>Plants Growing:</h2>
      <ul>{mappedIcons}</ul>
    </div>
  );
}

if (mode === false) {

  return (
    <div className={styles.plantsGrowingContainer}>
      <h2>Plants Growing:</h2>
      <ul>{editMappedIcons}</ul>
    </div>
  );
}

}