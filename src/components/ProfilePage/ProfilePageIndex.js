import styles from "../styles/ProfilePage/ProfilePageIndex.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

import HeroHeader from "./HeroHeader";
import PlantsGrowing from "./PlantsGrowing";
import AboutSection from "./AboutSection";
import TipsSection from "./TipsSection";
import ShareSection from "./ShareSection";
import getPlotProfileInfo from "../../helpers/getPlotProfileInfo";
import FileUpload from "../_partials/_FileUpload";
import EditHeroHeader from "../ProfilePage/EditingComponents/EditHeroHeader";
import EditAboutSection from "./EditingComponents/EditAboutSection";
import EditTipsSection from "./EditingComponents/EditTipsSection";
import EditPlantsGrowing from "./EditingComponents/EditPlantsGrowing";
import checkIfUserOwnsPlot from "../../helpers/checkIfUserOwnsPlot";
import FancyboxExample from "../HomePage/FancyBox";
import getPhotos from "../../helpers/getPhotos";

export default function ProfilePageIndex(props) {
  console.log("local storage:", localStorage);
  const [profileInfo, setProfileInfo] = useState([]);
  const [isLoading, setLoading] = useState(true);
  // const [ownsPlot, setOwnsPlot] = useState(null);
  const [photos, setPhotos] = useState(null);

  const id = useParams();
  const plot_id = id.id;
  const user = props.user;
  const plotID = parseInt(plot_id);

  console.log(user);
  console.log({
    plotID,
    user,
  });

  useEffect(() => {
    checkIfUserOwnsPlot(plotID, user).then((data) => {
      console.log("data inside hook", data);
      props.setOwnsPlot(data.user_owns_plot);
    });

    getPlotProfileInfo(plot_id).then((data) => {
      console.log("data inside func", data);
      setProfileInfo(data[0].profileInfo);
      setPhotos(data[1].photosInfo)
      setLoading(false);
    });

    // getPhotos(plot_id).then((data) => {
    //   setPhotos(data);
    //   console.log('look data', data);
    // })
  }, []);

  console.log("ownsPlot", props.ownsPlot);
  console.log('photos', photos);
  

  // const mappedPhotos = photos.map((image) => {
  //   <a
  //               data-fancybox="gallery"
  //               href={`http://localhost:8000/photos/${image.image_key}`}
  //             >
  //               <img
  //                 src={`http://localhost:8000/photos/${image.image_key}`}
  //                 width="200"
  //                 height="150"
  //               />
  //             </a>

  // });

  const mappedPhotos = [];

  for (const keyID in photos) {
    mappedPhotos.push(
      <a
                data-fancybox="gallery"
                href={`http://localhost:8000/photos/${photos[keyID].image_key}`}
              >
                <img
                  src={`http://localhost:8000/photos/${photos[keyID].image_key}`}
                  width="200"
                  height="150"
                />
              </a>
    );
  }

  const editMappedPhotos = [];

  for (const keyID in photos) {
    editMappedPhotos.push(
      <a
                data-fancybox="gallery"
                href={`http://localhost:8000/photos/${photos[keyID].image_key}`}
                style="margin-left: 20px;"
              >
                <img
                  src={`http://localhost:8000/photos/${photos[keyID].image_key}`}
                  width="200"
                  height="150"
                />
              </a>
    );
  }


  if (isLoading) {
    return (
      <div className="">
        <div className={styles.loadingContainer}>
          <TailSpin color="#000" height={100} width={100} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {props.ownsPlot === false && (
          <div className={styles.profilePageContainer}>
            <HeroHeader profileInfo={profileInfo} />
            <div className={styles.aboutSectionIndexContainer}>
              <PlantsGrowing
                plotID={plot_id}
                plantInfo={props.plants}
                plants={props.plantedPlants}
              />
              <AboutSection profileInfo={profileInfo} />
            </div>
            <TipsSection profileInfo={profileInfo} />

            <FancyboxExample
              options={{
                Carousel: {
                  infinite: false,
                },
              }}
            >
              {mappedPhotos}
            </FancyboxExample>
            <ShareSection />
            <a href="/">
              <button className={styles.homeButton}>Back to the Garden</button>
            </a>
          </div>
        )}

        {props.ownsPlot === true && (
          <div className={styles.profilePageContainer}>
            <EditHeroHeader profileInfo={profileInfo} />
            <div className={styles.aboutSectionIndexContainer}>
              <EditPlantsGrowing
                plotID={plot_id}
                plantInfo={props.plants}
                plants={props.plantedPlants}
                profileInfo={profileInfo}
              />
              <EditAboutSection profileInfo={profileInfo} />
            </div>
            <EditTipsSection
              profileInfo={profileInfo}
              userID={localStorage.user}
            />
            <ShareSection />
            <FileUpload 
            plotID={plot_id} 
            gardenID={1}
            setProfileInfo={setProfileInfo}
            setPhotos={setPhotos}
            setLoading={setLoading}/>

            <FancyboxExample
              options={{
                Carousel: {
                  infinite: false,
                },
              }}
            >
              {mappedPhotos}
            </FancyboxExample>
            <a href="/">
              <button className={styles.homeButton}>Back to the Garden</button>
            </a>
          </div>
        )}
      </div>
    );
  }
}
