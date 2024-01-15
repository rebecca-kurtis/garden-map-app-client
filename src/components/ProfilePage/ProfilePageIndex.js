import styles from "../styles/ProfilePage/ProfilePageIndex.module.css"
import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom"
import { TailSpin } from 'react-loader-spinner';

import HeroHeader from "./HeroHeader";
import PlantsGrowing from "./PlantsGrowing";
import AboutSection from "./AboutSection";
import TipsSection from "./TipsSection";
import ShareSection from "./ShareSection";
import getPlotProfileInfo from "../../helpers/getPlotProfileInfo";
import getAllTips from "../../helpers/getAllTips";
import getProfilePageInfo from "../../helpers/getProfilePageInfo";


export default function ProfilePageIndex(props) {

  const [profileInfo, setProfileInfo] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const id = useParams();
  console.log('id', id.id)
  const plot_id = id.id

  useEffect(() => {

    // getProfilePageInfo(plot_id)
    getPlotProfileInfo(plot_id)
    // getAllTips()
    .then((data) => {
      setProfileInfo(data);
      console.log('data from inside', data)
      setLoading(false);
      // console.log('users from inside', users)
    });

   

  },[] );

  console.log('profileInfo', profileInfo);
  // console.log('prfofile, name', profileInfo[0].user_name);
  // const userName = profileInfo[0].user_name;

  if (isLoading) {
    return (
      <div className="">
        <div  className={styles.loadingContainer}>
      <TailSpin
      // type="ThreeDots"
      color="#000"
      height={100}
      width={100}
       //3 secs
    />
    </div>
        </div>
    )
  } else {

    return (
      <div className={styles.profilePageContainer}>
      <HeroHeader  profileInfo={profileInfo}/>
      <div className={styles.aboutSectionIndexContainer}>
        <PlantsGrowing plotID={plot_id} plantInfo={props.plants} plants={props.plantedPlants}/>
        <AboutSection profileInfo={profileInfo}/>
      </div>
      <TipsSection />
      <ShareSection />
      <a  href="/"><button className={styles.homeButton}>Back to the Garden</button></a>

    </div>
)}
}