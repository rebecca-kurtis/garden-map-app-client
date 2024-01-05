import styles from "../styles/ProfilePage/ProfilePageIndex.module.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

import HeroHeader from "./HeroHeader";
import PlantsGrowing from "./PlantsGrowing";
import AboutSection from "./AboutSection";
import TipsSection from "./TipsSection";
import ShareSection from "./ShareSection";
import getPlotProfileInfo from "../../helpers/getPlotProfileInfo";

export default function ProfilePageIndex() {

  const [profileInfo, setProfileInfo] = useState([]);
  const id = useParams();
  console.log('id', id.id)
  const plot_id = id.id

  useEffect(() => {

    getPlotProfileInfo(plot_id)
    .then((data) => {
      setProfileInfo(data);
      console.log('data from inside', data)
      // console.log('users from inside', users)
    });

   

  }, []);


  return (
    <div className={styles.profilePageContainer}>
      <HeroHeader />
      <div className={styles.aboutSectionIndexContainer}>
        <PlantsGrowing />
        <AboutSection />
      </div>
      <TipsSection />
      <ShareSection />
    </div>
  );
}