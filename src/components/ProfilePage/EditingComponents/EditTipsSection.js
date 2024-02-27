import styles from "../../styles/ProfilePage/TipsSection.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function EditTipsSection(props) {
  const tipsArray = [];

  //collect all of the tips
  for (const obj in props.profileInfo) {
    const tip = props.profileInfo[obj].tdescription;
    const tipId = props.profileInfo[obj].tip_id;
    tipsArray.push([tipId, tip]);
  }

  //create function to remove any tips in tipsArray that are duplicates
  function removeTipsDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
  }
  //remove duplicates
  const newTipsArray = removeTipsDuplicates(tipsArray);

  //create function to add cleaned up tips to new obj to be used in state
  function addTipsToObj(dataArray) {
    const newObj = {};
    dataArray.forEach((tip, index) => {
      newObj[tip[0]] = tip[1];
    });
    return newObj;
  }
  // add tips to obj for state
  const newFormObj = addTipsToObj(newTipsArray);

  //tips state form set up using above obj for state tips
  const [form, setForm] = useState(newFormObj);
  const [submitForm, setSubmitForm] = useState(newFormObj);
  const [keyID, setKeyID] = useState(null);
  const [mode, setMode] = useState(true);

  // Set the value of a single element of the object
  const setValue = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  // Set the value of a single element of the object for Submit handler
  const setValueSubmit = (key, value) => {
    setSubmitForm({ [key]: value });
  };

  // const tipsEditRoute =
  //   process.env.REACT_APP_SERVER +
  //   ":" +
  //   process.env.REACT_APP_SERVER_PORT +
  //   "/updateTips";

    const tipsEditRoute =
    process.env.REACT_APP_SERVER +
    // ":" +
    // process.env.REACT_APP_SERVER_PORT +
    "/updateTips";

  const handleUserSubmit = (e) => {
    e.preventDefault();

    axios
      .post(tipsEditRoute, submitForm)
      .then((response) => {
        setForm(form);
        setMode(true);
        setDeleteValue(null);

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

  const handleClick = (keyID) => {
    setKeyID(keyID);
    setDeleteValue(keyID);
    setMode(false);
  };

  // const tipsDeleteRoute =
  //   process.env.REACT_APP_SERVER +
  //   ":" +
  //   process.env.REACT_APP_SERVER_PORT +
  //   "/deleteTip";

    const tipsDeleteRoute =
    process.env.REACT_APP_SERVER +
    // ":" +
    // process.env.REACT_APP_SERVER_PORT +
    "/deleteTip";

  const [deleteValue, setDeleteValue] = useState(null);

  const handleTipDelete = (e) => {
    e.preventDefault();

    axios
      .post(tipsDeleteRoute, {
        deleteValue: deleteValue,
        userID: props.userID,
      })
      .then((response) => {
        const newDataTipsArray = [];

        for (const obj in response.data) {
          const tip = response.data[obj].tdescription;
          const tipId = response.data[obj].tip_id;
          newDataTipsArray.push([tipId, tip]);
        }

        const newTipsArray = removeTipsDuplicates(newDataTipsArray);
        const newData = addTipsToObj(newTipsArray);
        setForm(newData);
        setMode(true);
        setTipMode(false);
        setDeleteValue(null);

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

  const [tipMode, setTipMode] = useState(false);

  const [newTipCreationForm, setNewTipCreationForm] = useState({});

  const addNewTipHandler = (e) => {
    setMode(false);
    setTipMode(true);
  };

  // const tipCreationRoute =
  //   process.env.REACT_APP_SERVER +
  //   ":" +
  //   process.env.REACT_APP_SERVER_PORT +
  //   "/addTip";

    const tipCreationRoute =
    process.env.REACT_APP_SERVER +
    // ":" +
    // process.env.REACT_APP_SERVER_PORT +
    "/addTip";

  const handleTipCreation = (e) => {
    e.preventDefault();

    axios
      .post(tipCreationRoute, {
        userID: props.userID,
        description: newTipCreationForm.description,
      })
      .then((response) => {
        const newDataTipsArray = [];

        for (const obj in response.data) {
          const tip = response.data[obj].tdescription;
          const tipId = response.data[obj].tip_id;
          newDataTipsArray.push([tipId, tip]);
        }

        const newTipsArray = removeTipsDuplicates(newDataTipsArray);
        const newData = addTipsToObj(newTipsArray);
        setForm(newData);
        setMode(true);

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

  const mappedTips = [];

  for (const keyID in form) {
    mappedTips.push(
      <li className={styles.plantsGrowingLiContainer} key={keyID}>
        <p>{form[keyID]}</p>
        <button
          onClick={() => handleClick(keyID)}
          className={styles.tipsButton}
        >
          Edit
        </button>
      </li>
    );
  }

  const editMappedTips = [];

  for (const key in form) {
    editMappedTips.push(
      <li className={styles.plantsGrowingLiContainer} key={key}>
        <form
          onSubmit={handleUserSubmit}
          className={styles.EditAboutSectionForm}
        >
          <textarea
            className={styles.inputTextTips}
            type="text"
            name={"tip"}
            value={form[key]}
            onChange={(e) => {
              setValue(key, e.target.value);
              setValueSubmit(key, e.target.value || key, form[key]);
            }}
            required
          ></textarea>
<div className={styles.editButtonRow}>
<button type="submit" className={styles.tipsButton}>
            Update
          </button>
          <button
            type="delete"
            onClick={handleTipDelete}
            className={styles.tipsButton}
          >
            Delete
          </button>
</div>
          
        </form>
      </li>
    );
  }

  function filterByKeyID(obj) {
    if (obj.key === keyID) {
      return obj;
    }
  }

  if (mode === true) {
    return (
      <div className={styles.tipsSectionContainer}>
        <div className={styles.editTipsHeader}>
          <h2 className={styles.tipsSectionContainerH2}>Tips:</h2>
          <button
            type="create"
            className={styles.addTipsButton}
            onClick={addNewTipHandler}
          >
            Add Tip
          </button>
        </div>
        <ul>
          {mappedTips}
        </ul>
      </div>
    );
  }

  if (mode === false && tipMode === true) {
    return (
      <div className={styles.tipsSectionContainer}>
        <div className={styles.editTipsHeader}>
          <h2 className={styles.tipsSectionContainerH2}>Tips:</h2>
        </div>
        <ul>
          {mappedTips}
          <form
            onSubmit={handleTipCreation}
            className={styles.addNewTipsSectionForm}
          >
            <textarea
              className={styles.inputTextTips}
              type="text"
              name={"new-tip"}
              placeholder={"Add New Tip Content Here"}
              onChange={(e) => {
                setNewTipCreationForm({ description: e.target.value });
              }}
              required
            ></textarea>
            <div className={styles.editButtonRow}>
            <button type="submit" className={styles.tipsButton}>
              Add Tip
            </button>
            <button
              type="delete"
              onClick={handleTipDelete}
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

  if (mode === false && keyID) {
    return (
      <div className={styles.tipsSectionContainer}>
        <div className={styles.editTipsHeader}>
          <h2 className={styles.tipsSectionContainerH2}>Tips:</h2>
        </div>
        Edit Tips Section:
        {editMappedTips.filter((obj) => filterByKeyID(obj))}
      </div>
    );
  }
}
