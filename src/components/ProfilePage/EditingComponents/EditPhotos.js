import styles from "../../styles/ProfilePage/EditPhotos.module.css";
import userImage from "../../images/user-image.png";
import { useState, useEffect } from "react";
import axios from "axios";

export default function EditPhotos(props) {
  const [mode, setMode] = useState(false);

  function onClickHandler() {
    setMode(true);
  }

  return (
    <div>
       {mode === false && (
        <button onClick={onClickHandler} className={styles.editPhotosButton}>Edit Images</button>
        )}


        {mode === true && (
        // <button onClick={onClickHandler} className={styles.editPhotosButton}>Edit Images</button>
        <p>you clicked me</p>
        )}
    </div>
  )
}