import styles from "../../styles/ProfilePage/PlantsGrowing.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import getAllPlants from "../../../helpers/getAllPlants";

export default function EditPlantsGrowing(props) {
  const plantsArray = props.plants;
  const [plantInfoArray, setPlantInfoArray] = useState(props.plantInfo);
  let plantIcons = [];
  const plotID = parseInt(props.plotID);

  const [mode, setMode] = useState(true);

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
  const [plantsGrowingState, setPlantsGrowingState] = useState(plantIcons);

  const [form, setForm] = useState({
    plotID: plotID,
  });

  const handleClick = () => {
    setMode(false);
  };

  const handleClickUpdate = () => {
    setMode(true);
  };

  const plantedPlantDeleteRoute =
    process.env.REACT_APP_SERVER +
    ":" +
    process.env.REACT_APP_SERVER_PORT +
    "/deletePlantedPlant";

  const plantedPlantDeleteHandler = (e, num) => {
    e.preventDefault();

    axios
      .post(plantedPlantDeleteRoute, {
        deleteValue: num,
        plotID: form.plotID,
      })
      .then((response) => {
        plantIcons = [];

        for (let plotObject in response.data) {
          for (let plantInfoObject in plantInfoArray) {
            if (
              response.data[plotObject].plot_id === plotID &&
              response.data[plotObject].plant_id ===
                plantInfoArray[plantInfoObject].plant_id
            ) {
              const name = plantInfoArray[plantInfoObject].name;
              const photo_url = plantInfoArray[plantInfoObject].photo_url;
              const plantedPlants_id =
                response.data[plotObject].plantedplants_id;
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

  const addPlantRoute =
    process.env.REACT_APP_SERVER +
    ":" +
    process.env.REACT_APP_SERVER_PORT +
    "/addPlant";

  const [addNewPlant, setAddNewPlant] = useState({});

  const handleAddPlantButton = (e) => {
    e.preventDefault();

    axios
      .post(addPlantRoute, {
        plotID: form.plotID,
        name: addNewPlant.name,
      })
      .then((response) => {
        plantIcons = [];

        for (let plotObject in response.data) {
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
        setAddNewPlant({});

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

  const createPlantRoute =
    process.env.REACT_APP_SERVER +
    ":" +
    process.env.REACT_APP_SERVER_PORT +
    "/createPlant";

  const [createNewPlant, setCreateNewPlant] = useState({});

  const handleCreatePlantButton = (e) => {
    e.preventDefault();

    axios
      .post(createPlantRoute, {
        plotID: form.plotID,
        name: createNewPlant.name,
      })
      .then((response) => {
        getAllPlants()
          .then((data) => {
            setPlantInfoArray(data);
          })
          .then(() => {
            plantIcons = [];

            for (let plotObject in response.data) {
              for (let plantInfoObject in plantInfoArray) {
                if (
                  response.data[plotObject].plot_id === plotID &&
                  response.data[plotObject].plant_id ===
                    plantInfoArray[plantInfoObject].plant_id
                ) {
                  const name = plantInfoArray[plantInfoObject].name;
                  const photo_url = plantInfoArray[plantInfoObject].photo_url;
                  const plantedPlants_id =
                    response.data[plotObject].plantedplants_id;
                  plantIcons.push([name, photo_url, plantedPlants_id]);
                }
              }
            }

            setPlantsGrowingState(plantIcons);
            setCreateNewPlant({
              name: "",
            });

            return response.data;
          });
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
          plantedPlantDeleteHandler(e, array[2]);
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

  const selectOptions = [];

  for (const keyID in plantInfoArray) {
    selectOptions.push(
      <option key={keyID} value={plantInfoArray[keyID].name}>
        {plantInfoArray[keyID].name}
      </option>
    );
  }

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
      </div>
    );
  }

  if (mode === false) {
    return (
      <div className={styles.plantsGrowingContainer}>
        <h2 className={styles.plantsGrowingContainerH2}>Plants Growing:</h2>
        <ul>{editMappedIcons}</ul>
        <form className={styles.addNewTipsSectionForm}>
          <div className={styles.addNewPlantDivContainer}>
            <label className={styles.addFormLabel}>Add A New Plant:</label>
            <select
              name={"new-plant"}
              className={styles.addNewPlantSelect}
              onChange={(e) => {
                setAddNewPlant({ name: e.target.value });
              }}
              required
            >
              {selectOptions}
            </select>
            <div className={styles.editButtonRow}>
              <button
                type="submit"
                className={styles.addButton}
                onClick={handleAddPlantButton}
              >
                Add Plant
              </button>
            </div>
            <label className={styles.addFormLabel}>Create New Plant:</label>
            <input
              className={styles.inputPlantName}
              type="text"
              name="first_name"
              value={createNewPlant.name}
              placeholder="Enter plant name"
              onChange={(e) => {
                setCreateNewPlant({ name: e.target.value });
              }}
              required
            ></input>
          </div>

          <div className={styles.editButtonRowAdd}>
            <button
              type="submit"
              className={styles.addButton}
              onClick={handleCreatePlantButton}
            >
              Create Plant
            </button>
            <button
              type="delete"
              className={styles.addButton}
              onClick={() => {
                setCreateNewPlant({
                  name: "",
                });
              }}
            >
              Cancel
            </button>
          </div>
        </form>
        <hr className={styles.solidLine}></hr>
        <button
          type="create"
          className={styles.updatePlantsButton}
          onClick={handleClickUpdate}
        >
          Update Plants
        </button>
      </div>
    );
  }
}
