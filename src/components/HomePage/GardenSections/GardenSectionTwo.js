import styles from '../../styles/HomePage/GardenSectionTwo.module.css';
import CircleBlocker from '../Plots/CircleBlocker';
import LargePlotElement from '../Plots/LargePlotElement';
import MediumPlotElementHorizontal from '../Plots/MediumPlotElementHorizontal';
import MediumPlotElementVertical from '../Plots/MediumPlotElementVertical';
import SmallPlotElement from '../Plots/SmallPlotElement';

export default function GardenSectionTwo(props) {

  const plantedPlantsArraySectionOne = props.plants;
  // console.log('test', plantedPlantsArraySectionOne);
  // console.log('test2', props.plantInfo)
  
  const plot7Plants = [];
  const plot8Plants = [];
  const plot9Plants = [];
  const plot11Plants = [];
  const plot12Plants = [];
  const plot13Plants = [];
  const plot27Plants = [];
  const plot28Plants = [];
  const plot35Plants = [];
  const plot36Plants = [];
  const plot37Plants = [];
  const plot38Plants = [];
  const plot39Plants = [];
  const plot40Plants = [];
  const plot41Plants = [];
  const plot42Plants = [];

  for (let plantObject in plantedPlantsArraySectionOne) {
    for (let plantInfoObject in props.plantInfo) {
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 7 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot7Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 8 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot8Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 9 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot9Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 11 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot11Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 12 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot12Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 13 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot13Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 27 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot27Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 28 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot28Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 35 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot35Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 36 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot36Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 37 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot37Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 38 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot38Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 39 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot39Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 40 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot40Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 41 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot41Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 42 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot42Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
    }
    // console.log(plot43);
    // console.log(plot43Plants);
  }
  return (
    <div className={styles.GardenSectionTwoContainer}>
      <div className={styles.sec2row1}>
        <MediumPlotElementHorizontal icons={plot42Plants}/>
        <MediumPlotElementHorizontal icons={plot41Plants}/>
        <CircleBlocker />
        <CircleBlocker />
      </div>
      <div className={styles.sec2row2}>
        <SmallPlotElement icons={plot27Plants}/>
        <SmallPlotElement icons={plot28Plants}/>
        <MediumPlotElementHorizontal icons={plot40Plants}/>
        <div className={styles.sec2row2col}>
          <MediumPlotElementVertical icons={plot39Plants}/>
          <MediumPlotElementVertical icons={plot38Plants}/>
        </div>
       
      </div>
      <div className={styles.sec2row3}>
        <LargePlotElement icons={plot13Plants}/>
        <LargePlotElement icons={plot12Plants}/>
        <LargePlotElement icons={plot11Plants}/>
        <div className={styles.sec2row3col}>
          <CircleBlocker />
          <MediumPlotElementVertical icons={plot37Plants}/>
        </div>

      </div>
      <div className={styles.sec2row4}>
        <div className={styles.sec2row4col1}>
          <LargePlotElement icons={plot9Plants}/>
          <CircleBlocker />
        </div>
        <div className={styles.sec2row4col1}>
          <LargePlotElement icons={plot8Plants}/>
          <CircleBlocker />
        </div>
        <div className={styles.sec2row4col1}>
          <LargePlotElement icons={plot7Plants}/>
          <CircleBlocker />
        </div>
  
        <div className={styles.sec2row4col4}>
        <MediumPlotElementVertical icons={plot36Plants}/>
          <CircleBlocker />
          <MediumPlotElementVertical icons={plot35Plants}/>
        </div>
      </div>
    </div>
  );
}