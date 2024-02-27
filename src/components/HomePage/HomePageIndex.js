import { useEffect, useState } from "react";


import styles from "../styles/HomePage/HomePageIndex.module.css";
import GardenSectionOne from "./GardenSections/GardenSectionOne";
import GardenSectionThree from "./GardenSections/GardenSectionThree";
import GardenSectionTwo from "./GardenSections/GardenSectionTwo";
import BottomPathVertical from "./Paths/BottomPathVertical";
import PathHorizontal from "./Paths/PathHorizontal";
import TopPathVertical from "./Paths/TopPathVertical";
import HomePageGallery from "./HomePageGallery";

export default function HomePageIndex(props) {

  const plantedPlantsArray = props.plantedPlants;

  return (
    
    <div className={styles.homePageContainer}>
      <div className={styles.mapContainer}>
        <div className={styles.mapContainerRow}>
          <GardenSectionOne plantInfo={props.plants} plants={plantedPlantsArray}/>
          <TopPathVertical />
          <GardenSectionTwo plantInfo={props.plants} plants={plantedPlantsArray}/>
        </div>
        <PathHorizontal />
        <div className={styles.mapContainerRowBottom}>
          <div className={styles.spaceBlocker} />
          {/* <HomePageGallery user={props.user} photos={props.photos} setProfileInfo={props.setProfileInfo} setPhotos={props.setPhotos}/> */}
          <BottomPathVertical />
          <GardenSectionThree plantInfo={props.plants} plants={plantedPlantsArray}/>
        </div>
      </div>
    </div>
  );
}
