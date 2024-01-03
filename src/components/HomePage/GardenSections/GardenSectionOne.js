import styles from "../../styles/HomePage/GardenSectionOne.module.css";
import CircleBlocker from "../Plots/CircleBlocker";
import LargePlotElement from "../Plots/LargePlotElement";
import MediumPlotElementHorizontal from "../Plots/MediumPlotElementHorizontal";
import SmallPlotElement from "../Plots/SmallPlotElement";

export default function GardenSectionOne(props) {
  const plantedPlantsArraySectionOne = props.plants;
  // console.log('test', plantedPlantsArraySectionOne);
  // console.log('test2', props.plantInfo)
  
  const plot14 = [];
  const plot14Plants = [];
  const plot15 = [];
  const plot15Plants = [];
  const plot16 = [];
  const plot16Plants = [];
  const plot18 = [];
  const plot17Plants = [];
  const plot18Plants = [];
  const plot19Plants = [];
  const plot20Plants = [];
  const plot21Plants = [];
  const plot23Plants = [];
  const plot24Plants = [];
  const plot25Plants = [];
  const plot26Plants = [];

  const plot43 = [];
  const plot43Plants = [];
  const plot44 = [];
  const plot44Plants = [];

  for (let plantObject in plantedPlantsArraySectionOne) {
    // if (plantedPlantsArraySectionOne[plantObject].plot_id === 14) {
    //   // console.log('plot43', plantedPlantsArraySectionOne[plantObject])
    //   plot14.push(plantedPlantsArraySectionOne[plantObject]);
    // }
    // if (plantedPlantsArraySectionOne[plantObject].plot_id === 15) {
    //   // console.log('plot43', plantedPlantsArraySectionOne[plantObject])
    //   plot15.push(plantedPlantsArraySectionOne[plantObject]);
    // }
    // if (plantedPlantsArraySectionOne[plantObject].plot_id === 18) {
    //   // console.log('plot43', plantedPlantsArraySectionOne[plantObject])
    //   plot18.push(plantedPlantsArraySectionOne[plantObject]);
    // }
    // if (plantedPlantsArraySectionOne[plantObject].plot_id === 43) {
    //   // console.log('plot43', plantedPlantsArraySectionOne[plantObject])
    //   plot43.push(plantedPlantsArraySectionOne[plantObject]);
    // }
    // if (plantedPlantsArraySectionOne[plantObject].plot_id === 44) {
    //   plot44.push(plantedPlantsArraySectionOne[plantObject]);
    // }
    for (let plantInfoObject in props.plantInfo) {
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 14 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot14Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 15 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot15Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 16 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot16Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 17 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot17Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 18 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot18Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 19 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot19Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 20 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot20Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 21 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot21Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 23 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot23Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 24 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot24Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 25 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot25Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 26 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot26Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 43 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot43Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 44 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot44Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
    }
    // console.log(plot43);
    // console.log(plot43Plants);
  }

  return (
    <div className={styles.gardenSectionOneContainer}>
      <div className={styles.sec1row1}>
        <MediumPlotElementHorizontal plants={plot43} icons={plot43Plants} />
        <MediumPlotElementHorizontal plants={plot44} icons={plot44Plants}/>
        <CircleBlocker />
      </div>
      <div className={styles.sec1row2}>
        <SmallPlotElement icons={plot23Plants}/>
        <SmallPlotElement icons={plot24Plants}/>
      </div>
      <div className={styles.sec1row3}>
      <MediumPlotElementHorizontal plants={plot18} icons={plot18Plants} />
      <MediumPlotElementHorizontal plants={plot14} icons={plot14Plants} />
      </div>
      <div className={styles.sec1row4}>
      <MediumPlotElementHorizontal plants={plot16} icons={plot16Plants} />
      <MediumPlotElementHorizontal plants={plot15} icons={plot15Plants} />
      </div>
      <div className={styles.sec1row5}>
        <div className={styles.sec1row5col1}>
        <SmallPlotElement icons={plot17Plants}/>
        <SmallPlotElement icons={plot26Plants}/>
        <SmallPlotElement icons={plot25Plants}/>
        </div>
        <div className={styles.sec1row5col2}>
          <CircleBlocker />
          <LargePlotElement />
        </div>
      </div>
      <div className={styles.sec1row6}>
        <div className={styles.sec1row6col1}>
          <div className={styles.sec1row6col1row}>
            <CircleBlocker />
            <CircleBlocker />
          </div>
          <LargePlotElement />
        </div>
        <div className={styles.sec1row6col2}>
          <div className={styles.sec1row6col2row}>
          <SmallPlotElement icons={plot20Plants}/>
          <SmallPlotElement icons={plot21Plants}/>
          </div>
          <SmallPlotElement icons={plot19Plants}/>
        </div>
      </div>
    </div>
  );
}
