import styles from "../../styles/ProfilePage/TipsSection.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function EditTipsSection(props) {
  const tipsArray = [];

  //collect all of the tips
  for (const obj in props.profileInfo) {
    console.log("test obj", props.profileInfo);
    const tip = props.profileInfo[obj].tdescription;
    const tipId = props.profileInfo[obj].tip_id;
    tipsArray.push([tipId, tip]);
  }
  console.log(tipsArray);

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
  console.log("newform", newFormObj);

  //tips state form set up using above obj for state tips
  const [form, setForm] = useState(newFormObj);
  const [submitForm, setSubmitForm] = useState({});
  const [keyID, setKeyID] = useState(null);

  console.log("state form", form);

  const [mode, setMode] = useState(true);

  // Set the value of a single element of the object
  const setValue = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  // Set the value of a single element of the object for Submit handler
  const setValueSubmit = (key, value) => {
    setSubmitForm({ [key]: value });
  };

  console.log("submitform", submitForm);
  console.log("key", keyID);

  const tipsEditRoute =
    process.env.REACT_APP_SERVER +
    ":" +
    process.env.REACT_APP_SERVER_PORT +
    "/updateTips";

  const handleUserSubmit = (e) => {
    e.preventDefault();

    axios
      .post(tipsEditRoute, submitForm)
      .then((response) => {
        console.log("response", response);
        setForm(form);
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

  const handleClick = (keyID) => {
    console.log("click");
    setKeyID(keyID);
    setMode(false);
  };

  // const tipsArray = [];

  // for (const obj in props.profileInfo) {
  //   tipsArray.push(props.profileInfo[obj].tdescription);
  // }
  // function removeTipsDuplicates(data) {
  //   return data.filter((value, index) => data.indexOf(value) === index);
  // }
  // console.log('Tips array', tipsArray)

  // const newTipsArray = removeTipsDuplicates(tipsArray);

  // function addTipsToObj(dataArray) {
  //   const newObj = {};
  //   dataArray.forEach((tip, index) => {
  //     newObj[index] = tip;
  //   })
  //   return newObj;
  // }
  // // console.log('newObj', addTipsToState(newTipsArray));
  // const newFormObj = addTipsToObj(newTipsArray);
  // console.log("newform",newFormObj);
  // setForm(newFormObj);

  // function addTipsToFormState() {

  //   const newTipsArray = removeTipsDuplicates(tipsArray);
  //   const newFormObj = addTipsToObj(newTipsArray);
  //   setForm(newFormObj);
  // }

  // console.log(addTipsToFormState)

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
              console.log("test test", e.target.value);
              setValue(key, e.target.value);
              setValueSubmit(key, e.target.value);
            }}
            required
          ></textarea>

          <button type="submit" className={styles.tipsButton}>
            Update
          </button>
        </form>
        {/* <p>{form[key]}</p> */}
      </li>
    );
  }

  console.log("editmappedtips", editMappedTips);

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
        </div>
        <ul>{mappedTips}</ul>
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
