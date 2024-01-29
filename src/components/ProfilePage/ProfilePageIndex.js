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

export default function ProfilePageIndex(props) {
  console.log("local storage:", localStorage)
  const [profileInfo, setProfileInfo] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [ownsPlot, setOwnsPlot] = useState(null);

  const id = useParams();
  const plot_id = id.id;
  const user = props.user;
  const plotID = parseInt(plot_id);

  console.log(user);
  console.log({
    plotID,
    user
  })

  useEffect(() => {

    checkIfUserOwnsPlot(plotID, user)
      .then((data) => {
        console.log('data inside hook', data);
        setOwnsPlot(data.user_owns_plot);
      });

    getPlotProfileInfo(plot_id)
      .then((data) => {
        console.log('data inside func', data);
        setProfileInfo(data);
        setLoading(false);
      });

  }, []);

  console.log("ownsPlot", ownsPlot);

  if (isLoading) {
    return (
      <div className="">
        <div className={styles.loadingContainer}>
          <TailSpin
            color="#000"
            height={100}
            width={100}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {ownsPlot === false && (
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
            <ShareSection />
            <a href="/">
              <button className={styles.homeButton}>Back to the Garden</button>
            </a>
          </div>
        )}

        {ownsPlot === true && (
          <div className={styles.profilePageContainer}>
            <EditHeroHeader profileInfo={profileInfo} />
            <div className={styles.aboutSectionIndexContainer}>
              <EditPlantsGrowing
                plotID={plot_id}
                plantInfo={props.plants}
                plants={props.plantedPlants}
              />
              <EditAboutSection profileInfo={profileInfo} />
            </div>
            <EditTipsSection profileInfo={profileInfo} />
            <ShareSection />
            <FileUpload />
            <a href="/">
              <button className={styles.homeButton}>Back to the Garden</button>
            </a>
          </div>
        )}
      </div>
    );
  }
}
