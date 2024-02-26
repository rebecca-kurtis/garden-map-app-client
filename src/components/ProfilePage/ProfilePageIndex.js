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

export default function ProfilePageIndex(props) {
  console.log("local storage:", localStorage);
  // const [profileInfo, setProfileInfo] = useState([]);
  const [isLoading, setLoading] = useState(true);
  // const [photos, setPhotos] = useState(null);

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
      props.setProfileInfo(data[0].profileInfo);
      props.setPhotos(data[1].photosInfo)
      setLoading(false);
    });
  }, []);

  // console.log("ownsPlot", props.ownsPlot);
  // console.log('photos', photos);


  const mappedPhotos = [];

  for (const keyID in props.photos) {
    mappedPhotos.push(
      <a
                data-fancybox="gallery"
                href={`http://localhost:8000/photos/${props.photos[keyID].image_key}`}
              >
                <img
                  src={`http://localhost:8000/photos/${props.photos[keyID].image_key}`}
                  width="200"
                  height="150"
                />
              </a>
    );
  }

  const editMappedPhotos = [];

  for (const keyID in props.photos) {
    editMappedPhotos.push(
      <a
                data-fancybox="gallery"
                href={`http://localhost:8000/photos/${props.photos[keyID].image_key}`}
                style="margin-left: 20px;"
              >
                <img
                  src={`http://localhost:8000/photos/${props.photos[keyID].image_key}`}
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
            <HeroHeader profileInfo={props.profileInfo} />
            <div className={styles.aboutSectionIndexContainer}>
              <PlantsGrowing
                plotID={plot_id}
                plantInfo={props.plants}
                plants={props.plantedPlants}
              />
              <AboutSection profileInfo={props.profileInfo} />
            </div>
            <TipsSection profileInfo={props.profileInfo} />

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
            <EditHeroHeader profileInfo={props.profileInfo} />
            <div className={styles.aboutSectionIndexContainer}>
              <EditPlantsGrowing
                plotID={plot_id}
                plantInfo={props.plants}
                plants={props.plantedPlants}
                profileInfo={props.profileInfo}
              />
              <EditAboutSection profileInfo={props.profileInfo} />
            </div>
            <EditTipsSection
              profileInfo={props.profileInfo}
              userID={localStorage.user}
            />
            <ShareSection />
            <FileUpload 
            plotID={plot_id} 
            gardenID={1}
            setProfileInfo={props.setProfileInfo}
            setPhotos={props.setPhotos}
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
