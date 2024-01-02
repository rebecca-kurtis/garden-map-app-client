import { useEffect, useState } from "react";


import styles from "../styles/HomePage/HomePageIndex.module.css";
import GardenSectionOne from "./GardenSections/GardenSectionOne";
import GardenSectionThree from "./GardenSections/GardenSectionThree";
import GardenSectionTwo from "./GardenSections/GardenSectionTwo";
import BottomPathVertical from "./Paths/BottomPathVertical";
import PathHorizontal from "./Paths/PathHorizontal";
import TopPathVertical from "./Paths/TopPathVertical";

export default function HomePageIndex(props) {

  console.log('props', props)
  const plantedPlantsArray = props.plantedPlants;
  const gardenSectionOneInfo = [];

  for (let plantObject in plantedPlantsArray) {
      console.log('plantedPlantsArray object', plantedPlantsArray[plantObject].plot_id)
      if (plantedPlantsArray[plantObject].plot_id >= 1 && plantedPlantsArray[plantObject].plot_id <= 5) {
        console.log('num3', plantedPlantsArray[plantObject].plot_id)
        gardenSectionOneInfo.push(plantedPlantsArray[plantObject]);
        
      }
      // console.log(gardenSectionOneInfo);
  }
  console.log(gardenSectionOneInfo);


  return (
    <div className={styles.homePageContainer}>
      <div className={styles.mapContainer}>
        <div className={styles.mapContainerRow}>
          <GardenSectionOne plantInfo={props.plants} plants={gardenSectionOneInfo}/>
          <TopPathVertical />
          {/* <GardenSectionTwo /> */}
        </div>
        <PathHorizontal />
        <div className={styles.mapContainerRow}>
          <div className={styles.spaceBlocker} />
          <BottomPathVertical />
          {/* <GardenSectionThree /> */}
        </div>
      </div>
    </div>
  );
}
