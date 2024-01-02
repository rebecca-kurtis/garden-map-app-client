import styles from '../../styles/HomePage/GardenSectionOne.module.css';
import CircleBlocker from '../Plots/CircleBlocker';
import LargePlotElement from '../Plots/LargePlotElement';
import MediumPlotElementHorizontal from '../Plots/MediumPlotElementHorizontal';
import SmallPlotElement from '../Plots/SmallPlotElement';

export default function GardenSectionOne(props) {

  const plantedPlantsArraySectionOne = props.plants;
  // console.log('test', plantedPlantsArraySectionOne);
  // console.log('test2', props.plantInfo)
  const plotOne = [];
  const plotOnePlants = [];

  for (let plantObject in plantedPlantsArraySectionOne) {
    if (plantedPlantsArraySectionOne[plantObject].plot_id === 1) {
      // console.log('num3', plantedPlantsArray[plantObject].plot_id)
      plotOne.push(plantedPlantsArraySectionOne[plantObject]);
      
    }
    for (let plantInfoObject in props.plantInfo) {
      // console.log('plant info', props.plantInfo[plantInfoObject]);
      if (plantedPlantsArraySectionOne[plantObject].plant_id === props.plantInfo[plantInfoObject].plant_id) {
        // console.log('num3', plantedPlantsArray[plantObject].plot_id)
        plotOnePlants.push(props.plantInfo[plantInfoObject]);
        
      }
      
    }
    // console.log(plotOne);
    // console.log(plotOnePlants);
    
}



  return (
    <div className={styles.gardenSectionOneContainer}>
      <div className={styles.sec1row1}>
        <MediumPlotElementHorizontal plotOne={plotOne} plotOnePlants={plotOnePlants}/>
        <MediumPlotElementHorizontal />
        <CircleBlocker />
      </div>
      <div className={styles.sec1row2}>
        <SmallPlotElement />
        <SmallPlotElement />
      </div>
      <div className={styles.sec1row3}>
        <MediumPlotElementHorizontal />
        <MediumPlotElementHorizontal />
      </div>
      <div className={styles.sec1row4}>
        <MediumPlotElementHorizontal />
        <MediumPlotElementHorizontal />
      </div>
      <div className={styles.sec1row5}>
        <div className={styles.sec1row5col1}>
          <SmallPlotElement />
          <SmallPlotElement />
          <SmallPlotElement />
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
              <SmallPlotElement />
              <SmallPlotElement />
          </div>
          <SmallPlotElement />
        </div>
      </div>
    </div>
  );
}