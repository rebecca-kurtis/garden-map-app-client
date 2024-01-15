import styles from '../../styles/HomePage/GardenSectionTwo.module.css';
import CircleBlocker from '../Plots/CircleBlocker';
import LargePlotElement from '../Plots/LargePlotElement';
import MediumPlotElementHorizontal from '../Plots/MediumPlotElementHorizontal';
import MediumPlotElementVertical from '../Plots/MediumPlotElementVertical';
import SmallPlotElement from '../Plots/SmallPlotElement';
import onClickHandler from '../../../helpers/onClickHandlerPlot';

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
  }


  return (
    <div className={styles.GardenSectionTwoContainer}>
      <div className={styles.sec2row1}>
        <MediumPlotElementHorizontal  onclick={onClickHandler} plotID={42} icons={plot42Plants}/>
        <MediumPlotElementHorizontal onclick={onClickHandler} plotID={41} icons={plot41Plants}/>
        <CircleBlocker />
        <CircleBlocker />
      </div>
      <div className={styles.sec2row2}>
        <SmallPlotElement onclick={onClickHandler} plotID={27} icons={plot27Plants}/>
        <SmallPlotElement onclick={onClickHandler} plotID={28} icons={plot28Plants}/>
        <MediumPlotElementHorizontal onclick={onClickHandler} plotID={40} icons={plot40Plants}/>
        <div className={styles.sec2row2col}>
          <MediumPlotElementVertical onclick={onClickHandler} plotID={39} icons={plot39Plants}/>
          <MediumPlotElementVertical onclick={onClickHandler} plotID={38} icons={plot38Plants}/>
        </div>
       
      </div>
      <div className={styles.sec2row3}>
        <LargePlotElement onclick={onClickHandler} plotID={13} icons={plot13Plants}/>
        <LargePlotElement onclick={onClickHandler} plotID={12} icons={plot12Plants}/>
        <LargePlotElement onclick={onClickHandler} plotID={11} icons={plot11Plants}/>
        <div className={styles.sec2row3col}>
          <CircleBlocker />
          <MediumPlotElementVertical onclick={onClickHandler} plotID={37} icons={plot37Plants}/>
        </div>

      </div>
      <div className={styles.sec2row4}>
        <div className={styles.sec2row4col1}>
          <LargePlotElement onclick={onClickHandler} plotID={9} icons={plot9Plants}/>
          <CircleBlocker />
        </div>
        <div className={styles.sec2row4col1}>
          <LargePlotElement onclick={onClickHandler} plotID={8} icons={plot8Plants}/>
          <CircleBlocker />
        </div>
        <div className={styles.sec2row4col1}>
          <LargePlotElement onclick={onClickHandler} plotID={7} icons={plot7Plants}/>
          <CircleBlocker />
        </div>
  
        <div className={styles.sec2row4col4}>
        <MediumPlotElementVertical onclick={onClickHandler} plotID={36} icons={plot36Plants}/>
          <CircleBlocker />
          <MediumPlotElementVertical onclick={onClickHandler} plotID={35} icons={plot35Plants}/>
        </div>
      </div>
    </div>
  );
}