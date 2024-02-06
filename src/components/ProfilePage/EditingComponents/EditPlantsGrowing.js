import styles from "../../styles/ProfilePage/PlantsGrowing.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function EditPlantsGrowing(props) {
  const plantsArray = props.plants;
  const plantInfoArray = props.plantInfo;
  const plantIconsArray = [];
  // const [plantsIcons, setPlantIcons] = useState([]);
  let plantIcons = [];

  // const [plantsIcons, setPlantIcons] = useState([plantIconsArray]);
  const plotID = parseInt(props.plotID);

  const [mode, setMode] = useState(true);
  const [addNewMode, setAddNewMode] = useState(false);
  // const [plantsGrowingState, setPlantsGrowingState] = useState(plantIcons);
  // const [deletePPValue, setDeletePPValue] = useState(null);

  //collect all of the plantedPlants
  for (let plotObject in plantsArray) {
    for (let plantInfoObject in plantInfoArray) {
      if (
        plantsArray[plotObject].plot_id === plotID &&
        plantsArray[plotObject].plant_id ===
          plantInfoArray[plantInfoObject].plant_id
      ) {
        const name = plantInfoArray[plantInfoObject].name;
        const photo_url = plantInfoArray[plantInfoObject].photo_url;
        const plantedPlants_id = plantsArray[plotObject].plantedplants_id;
        plantIcons.push([name, photo_url, plantedPlants_id]);
      }
    }
  }
  console.log("plantIcons above state", plantIcons);
  const [plantsGrowingState, setPlantsGrowingState] = useState(plantIcons);

  // const [plantsGrowingState, setPlantsGrowingState] = useState(plantIcons);
  // console.log("plantsgrowingstate below state", plantsGrowingState);

  // setPlantIcons(plantIconsArray);
  // const [plantsIcons, setPlantIcons] = useState([]);

  console.log("plantinfoarray", plantInfoArray);
  const [form, setForm] = useState({
    plotID: plotID,
  });

  // const [mode, setMode] = useState(true);
  // const [addNewMode, setAddNewMode] = useState(false);
  // const [plantsGrowingState, setPlantsGrowingState] = useState(plantIcons);

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

  const handleClickUpdate = () => {
    console.log("click");
    setMode(true);
  };

  const handleClickAddNew = () => {
    console.log("click");
    // setMode(false);
    // setMode(false);

    setAddNewMode(true);
    console.log("state", addNewMode);
  };

  console.log("state", addNewMode);

  const [deletePPValue, setDeletePPValue] = useState(null);

  const plantedPlantDeleteRoute =
    process.env.REACT_APP_SERVER +
    ":" +
    process.env.REACT_APP_SERVER_PORT +
    "/deletePlantedPlant";

  const plantedPlantDeleteHandler = (e, num) => {
    // console.log("delete");

    e.preventDefault();

    axios
      .post(plantedPlantDeleteRoute, {
        deleteValue: num,
        plotID: form.plotID,
      })
      .then((response) => {
        // console.log('response', response);

        plantIcons = [];

        for (let plotObject in response.data) {
          // console.log('data', plotObject);
          for (let plantInfoObject in plantInfoArray) {
            if (
              response.data[plotObject].plot_id === plotID &&
              response.data[plotObject].plant_id ===
                plantInfoArray[plantInfoObject].plant_id
            ) {
              const name = plantInfoArray[plantInfoObject].name;
              const photo_url = plantInfoArray[plantInfoObject].photo_url;
              const plantedPlants_id = plantsArray[plotObject].plantedplants_id;
              plantIcons.push([name, photo_url, plantedPlants_id]);
            }
          }
        }

        setPlantsGrowingState(plantIcons);

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

  const tipCreationRoute =
    process.env.REACT_APP_SERVER +
    ":" +
    process.env.REACT_APP_SERVER_PORT +
    "/addTip";

  const handleAddNewPlantCreation = (e) => {
    e.preventDefault();

    // axios
    //   .post(tipCreationRoute, {
    //     userID: props.userID,
    //     description: newTipCreationForm.description,
    //   })
    //   .then((response) => {
    //     const newDataTipsArray = [];

    //     for (const obj in response.data) {
    //       const tip = response.data[obj].tdescription;
    //       const tipId = response.data[obj].tip_id;
    //       newDataTipsArray.push([tipId, tip]);
    //     }

    //     const newTipsArray = removeTipsDuplicates(newDataTipsArray);
    //     const newData = addTipsToObj(newTipsArray);
    //     setForm(newData);
    //     setMode(true);

    //     return response.data;
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       alert(`Error! ${error.message}`);
    //     } else if (error.request) {
    //       console.log("network error");
    //     } else {
    //       console.log(error);
    //     }
    //   });
  };

  console.log("plantIcons", plantIcons);
  console.log("plantsarray", plantsArray);

  // const iconArray = setPlantIcons(plantIconsArray);
  // console.log('iconarray', iconArray);

  const mappedIcons = plantsGrowingState.map((array, index) => (
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

  const editMappedIcons = plantsGrowingState.map((array, index) => (
    <li className={styles.plantsGrowingLiContainer} key={index}>
      <button
        type="submit"
        onClick={(e) => {
          // setDeletePPValue(array[2]);
          plantedPlantDeleteHandler(e, array[2]);
          console.log("deleteValue", deletePPValue);
        }}
        className={styles.xDeleteLI}
      >
        &#10005;
      </button>

      <img
        className={styles.plantsGrowingIconImage}
        src={require(".././../images/PlantIcons/" + array[1] + ".png")}
        alt="icon"
      ></img>
      <p>{array[0]}</p>
    </li>
  ));

  // const selectOptions = plantInfoArray.map((array, ))

  const selectOptions = [];

  for (const keyID in plantInfoArray) {
    // console.log("keyID", keyID);
    // console.log("plantInfoArray[keyID]", plantInfoArray[keyID]);

    selectOptions.push(
      <option key={keyID} value={plantInfoArray[keyID].name}>
        <p>{plantInfoArray[keyID].name}</p>
      </option>
    );
  }
  // console.log("sel", selectOptions);

  if (mode === true) {
    return (
      <div className={styles.plantsGrowingContainer}>
        <div className={styles.editPlantsHeader}>
          <h2 className={styles.plantsGrowingContainerH2}>Plants Growing:</h2>
          <button
            type="create"
            className={styles.editPlantsButton}
            onClick={handleClick}
          >
            Edit
          </button>
        </div>
        <ul>{mappedIcons}</ul>
        {/* <button
            type="submit"
            className={styles.editPlantsButton}
            onClick={handleClickAddNew}
          >
            Add New Plant
          </button> */}
      </div>
    );
  }

  if (mode === false) {
    return (
      <div className={styles.plantsGrowingContainer}>
        <h2 className={styles.plantsGrowingContainerH2}>Plants Growing:</h2>
        <button
          type="create"
          className={styles.editPlantsButton}
          onClick={handleClickUpdate}
        >
          Update
        </button>
        <ul>
          {editMappedIcons}
          <form
            onSubmit={handleAddNewPlantCreation}
            className={styles.addNewTipsSectionForm}
          >
            <div className={styles.addNewPlantDivContainer}>
              <select
                name={"new-plant"}
                onChange={(e) => {
                  // setNewTipCreationForm({ description: e.target.value });
                  console.log("e", e.target.value);
                }}
                required
              >
                {selectOptions}
              </select>
              <label className="form-label">Create New Plant:</label>
              <input
                className={styles.inputTextName}
                type="text"
                name="first_name"
                value={form.first_name}
                placeholder="Enter your username"
                onChange={(e) => {
                  // setValue("first_name", e.target.value)
                  console.log("ee", e.target.value);
                }}
                required
              ></input>
            </div>

            <div className={styles.editButtonRow}>
              <button type="submit" className={styles.tipsButton}>
                Add Tip
              </button>
              <button
                type="delete"
                // onClick={handleTipDelete}
                className={styles.tipsButton}
              >
                Cancel
              </button>
            </div>
          </form>
        </ul>
      </div>
    );
  }

  // if (addNewMode === true) {

  //   return (
  //     <div className={styles.plantsGrowingContainer}>
  //       <h2 className={styles.plantsGrowingContainerH2}>Plants Growing:</h2>
  //       <button
  //             type="create"
  //             className={styles.editPlantsButton}
  //             onClick={handleClickUpdate}
  //           >
  //             Update
  //           </button>
  //       {/* <ul>{editMappedIcons} </ul> */}
  //       <p>test</p>
  //       {/* <form
  //             onSubmit={handleAddNewPlantCreation}
  //             className={styles.addNewTipsSectionForm}
  //           >
  //             <textarea
  //               className={styles.inputTextTips}
  //               type="text"
  //               name={"new-tip"}
  //               placeholder={"Add New Tip Content Here"}
  //               onChange={(e) => {
  //                 // setNewTipCreationForm({ description: e.target.value });
  //                 console.log("e", e.target.value)
  //               }}
  //               required
  //             ></textarea>
  //             <div className={styles.editButtonRow}>
  //             <button type="submit" className={styles.tipsButton}>
  //               Add Tip
  //             </button>
  //             <button
  //               type="delete"
  //               // onClick={handleTipDelete}
  //               className={styles.tipsButton}
  //             >
  //               Cancel
  //             </button>
  //             </div>
  //           </form> */}
  //       {/* <button
  //             type="create"
  //             className={styles.editPlantsButton}
  //             onClick={handleClickAddNew}
  //           >
  //             Add New Plant
  //           </button> */}
  //     </div>
  //   );
  // }
}
