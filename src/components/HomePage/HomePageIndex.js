import { useEffect, useState } from "react";


import styles from "../styles/HomePage/HomePageIndex.module.css";
import GardenSectionOne from "./GardenSections/GardenSectionOne";
import GardenSectionThree from "./GardenSections/GardenSectionThree";
import GardenSectionTwo from "./GardenSections/GardenSectionTwo";
import BottomPathVertical from "./Paths/BottomPathVertical";
import PathHorizontal from "./Paths/PathHorizontal";
import TopPathVertical from "./Paths/TopPathVertical";

export default function HomePageIndex(props) {

  // console.log('props', props)
  const plantedPlantsArray = props.plantedPlants;
  // console.log('planttest', plantedPlantsArray)
  const gardenSectionOneInfo = [];
  const gardenSectionThreeInfo = [];

  // for (let plantObject in plantedPlantsArray) {
  //     // console.log('plantedPlantsArray object', plantedPlantsArray[plantObject].plot_id)
  //     if (plantedPlantsArray[plantObject].plot_id >= 10 && plantedPlantsArray[plantObject].plot_id <= 44) {
  //       // console.log('num3', plantedPlantsArray[plantObject].plot_id)
  //       gardenSectionOneInfo.push(plantedPlantsArray[plantObject]);
        
  //     }
  //     if (plantedPlantsArray[plantObject].plot_id >= 11 && plantedPlantsArray[plantObject].plot_id <= 44) {
  //       // console.log('num3', plantedPlantsArray[plantObject].plot_id)
  //       gardenSectionOneInfo.push(plantedPlantsArray[plantObject]);
        
  //     }
  //     // console.log(gardenSectionOneInfo);
  // }
  // // console.log(gardenSectionOneInfo);


  return (
    <div className={styles.homePageContainer}>
      <div className={styles.mapContainer}>
        <div className={styles.mapContainerRow}>
          <GardenSectionOne plantInfo={props.plants} plants={plantedPlantsArray}/>
          <TopPathVertical />
          <GardenSectionTwo plantInfo={props.plants} plants={plantedPlantsArray}/>
        </div>
        <PathHorizontal />
        <div className={styles.mapContainerRow}>
          <div className={styles.spaceBlocker} />
          <BottomPathVertical />
          <GardenSectionThree plantInfo={props.plants} plants={plantedPlantsArray}/>
        </div>
      </div>
    </div>
  );
}
