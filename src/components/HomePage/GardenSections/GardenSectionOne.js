import styles from "../../styles/HomePage/GardenSectionOne.module.css";
import CircleBlocker from "../Plots/CircleBlocker";
import LargePlotElement from "../Plots/LargePlotElement";
import MediumPlotElementHorizontal from "../Plots/MediumPlotElementHorizontal";
import SmallPlotElement from "../Plots/SmallPlotElement";
import onClickHandler from '../../../helpers/onClickHandlerPlot';


export default function GardenSectionOne(props) {
  const plantedPlantsArraySectionOne = props.plants;
  console.log('test', plantedPlantsArraySectionOne);
  // console.log('test2', props.plantInfo)
  
  const plot10Plants = [];
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
  const plot22Plants = [];
  const plot23Plants = [];
  const plot24Plants = [];
  const plot25Plants = [];
  const plot26Plants = [];

  const plot43 = [];
  const plot43Plants = [];
  const plot44 = [];
  const plot44Plants = [];

  for (let plantObject in plantedPlantsArraySectionOne) {
    if (plantedPlantsArraySectionOne[plantObject].plot_id === 14) {
      // console.log('plot43', plantedPlantsArraySectionOne[plantObject])
      plot14.push(plantedPlantsArraySectionOne[plantObject]);
    }
    for (let plantInfoObject in props.plantInfo) {
      if (
        plantedPlantsArraySectionOne[plantObject].plot_id === 10 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot10Plants.push(props.plantInfo[plantInfoObject].photo_url);
      }
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
        plantedPlantsArraySectionOne[plantObject].plot_id === 22 &&
        plantedPlantsArraySectionOne[plantObject].plant_id ===
          props.plantInfo[plantInfoObject].plant_id
      ) {
        plot22Plants.push(props.plantInfo[plantInfoObject].photo_url);
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
  }


  return (
    <div className={styles.gardenSectionOneContainer}>
      <div className={styles.sec1row1}>
        <MediumPlotElementHorizontal onclick={onClickHandler} plotID={43} icons={plot43Plants} />
        <MediumPlotElementHorizontal onclick={onClickHandler} plotID={44} icons={plot44Plants}/>
        <CircleBlocker />
      </div>
      <div className={styles.sec1row2}>
        <SmallPlotElement onclick={onClickHandler} plotID={23} icons={plot23Plants}/>
        <SmallPlotElement onclick={onClickHandler} plotID={24} icons={plot24Plants}/>
      </div>
      <div className={styles.sec1row3}>
      <MediumPlotElementHorizontal onclick={onClickHandler} plotID={18} icons={plot18Plants} />
      <MediumPlotElementHorizontal onclick={onClickHandler} plotID={14} icons={plot14Plants} />
      </div>
      <div className={styles.sec1row4}>
      <MediumPlotElementHorizontal onclick={onClickHandler} plotID={16} icons={plot16Plants} />
      <MediumPlotElementHorizontal onclick={onClickHandler} plotID={15} icons={plot15Plants} />
      </div>
      <div className={styles.sec1row5}>
        <div className={styles.sec1row5col1}>
        <SmallPlotElement onclick={onClickHandler} plotID={17} icons={plot17Plants}/>
        <SmallPlotElement onclick={onClickHandler} plotID={26} icons={plot26Plants}/>
        <SmallPlotElement onclick={onClickHandler} plotID={25} icons={plot25Plants}/>
        </div>
        <div className={styles.sec1row5col2}>
          <CircleBlocker />
          <LargePlotElement onclick={onClickHandler} plotID={10} icons={plot10Plants}/>
        </div>
      </div>
      <div className={styles.sec1row6}>
        <div className={styles.sec1row6col1}>
          <div className={styles.sec1row6col1row}>
            <CircleBlocker />
            <CircleBlocker />
          </div>
          <LargePlotElement onclick={onClickHandler} plotID={22} icons={plot22Plants}/>
        </div>
        <div className={styles.sec1row6col2}>
          <div className={styles.sec1row6col2row}>
          <SmallPlotElement onclick={onClickHandler} plotID={20} icons={plot20Plants}/>
          <SmallPlotElement onclick={onClickHandler} plotID={21} icons={plot21Plants}/>
          </div>
          <SmallPlotElement onclick={onClickHandler} plotID={19} icons={plot19Plants}/>
        </div>
      </div>
    </div>
  );
}
