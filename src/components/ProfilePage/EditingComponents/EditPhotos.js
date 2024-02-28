import styles from "../../styles/ProfilePage/EditPhotos.module.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";


// const selectOptions = [];

//   for (const keyID in plantInfoArray) {
//     selectOptions.push(
//       <option key={keyID} value={plantInfoArray[keyID].name}>
//         {plantInfoArray[keyID].name}
//       </option>
//     );
//   }

function MyVerticallyCenteredModal(props) {

  const selectOptions = [];

  for (const keyID in props.photos) {
    selectOptions.push(
      <option key={keyID} value={props.photos[keyID].name}>
        {props.photos[keyID].name}
      </option>
    );
  }

  // const deletePhotoRoute =
  //   process.env.REACT_APP_SERVER +
  //   ":" +
  //   process.env.REACT_APP_SERVER_PORT +
  //   `/deletePhoto/${props.plotID}`;

    const deletePhotoRoute =
    process.env.REACT_APP_SERVER_URL + `/deletePhoto/${props.plotID}`;


  const deleteImagesHandler = (e, key) => {

    e.preventDefault();

    axios
      .post(deletePhotoRoute, {
        deleteImages: key
      })
      .then((response) => {

        console.log("delete resp", response)
        // plantIcons = [];

        // for (let plotObject in response.data) {
        //   for (let plantInfoObject in plantInfoArray) {
        //     if (
        //       response.data[plotObject].plot_id === plotID &&
        //       response.data[plotObject].plant_id ===
        //         plantInfoArray[plantInfoObject].plant_id
        //     ) {
        //       const name = plantInfoArray[plantInfoObject].name;
        //       const photo_url = plantInfoArray[plantInfoObject].photo_url;
        //       const plantedPlants_id =
        //         response.data[plotObject].plantedplants_id;
        //       plantIcons.push([name, photo_url, plantedPlants_id]);
        //     }
        //   }
        // }

        // setPlantsGrowingState(plantIcons);

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

  }

  const editMappedIcons = props.photos.map((obj, index) => (
    // console.log("t", obj)
    <li className={styles.editPhotosLiContainer} key={index}>
      <button
        type="submit"
        onClick={(e) => {
          deleteImagesHandler(e, obj.image_key);
        }}
        className={styles.xDeleteLI}
      >
        &#10005;
      </button>
      <img
          src={`http://localhost:8000/photos/${obj.image_key}`}
          width="60"
          height="60"
          // cover="contain"
        />
      <p>{obj.image_key}</p>
    </li>
  ));


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Photos:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <select
          name={"new-plant"}
          className={styles.addNewPlantSelect}
          onChange={(e) => {
            // setAddNewPlant({ name: e.target.value });
            console.log('e', e.target.value)
          }}
          required
        > */}
         <ul>{editMappedIcons}</ul> 
        {/* </select> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function EditPhotos(props) {
  const [modalShow, setModalShow] = useState(false);

  const photos = props.photos;
  const plotID = props.plotID;

  return (
    <>
      <Button
        className={styles.editPhotosButton}
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        Edit Photos
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        photos={photos}
        plotID={plotID}
      />
    </>
  );
}

// render(<App />);
