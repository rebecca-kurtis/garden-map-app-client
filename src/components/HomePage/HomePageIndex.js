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

  for (let plantObject in plantedPlantsArray) {
    for (let key of plantObject) {
      console.log('key2', plantObject[key]);
    }
    console.log('key', plantObject);
    console.log(plantObject.plot_id)
  }
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.mapContainer}>
        <div className={styles.mapContainerRow}>
          <GardenSectionOne />
          <TopPathVertical />
          <GardenSectionTwo />
        </div>
        <PathHorizontal />
        <div className={styles.mapContainerRow}>
          <div className={styles.spaceBlocker} />
          <BottomPathVertical />
          <GardenSectionThree />
        </div>
      </div>
    </div>
  );
}
