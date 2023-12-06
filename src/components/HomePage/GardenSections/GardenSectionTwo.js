import styles from '../../styles/HomePage/GardenSectionTwo.module.css';
import CircleBlocker from '../Plots/CircleBlocker';
import LargePlotElement from '../Plots/LargePlotElement';
import MediumPlotElementHorizontal from '../Plots/MediumPlotElementHorizontal';
import MediumPlotElementVertical from '../Plots/MediumPlotElementVertical';
import SmallPlotElement from '../Plots/SmallPlotElement';

export default function GardenSectionTwo() {
  return (
    <div className={styles.GardenSectionTwoContainer}>
      <div className={styles.sec2row1}>
        <MediumPlotElementHorizontal />
        <MediumPlotElementHorizontal />
        <CircleBlocker />
        <CircleBlocker />
      </div>
      <div className={styles.sec2row2}>
        <SmallPlotElement />
        <SmallPlotElement />
        <MediumPlotElementHorizontal />
        <div className={styles.sec2row2col}>
          <MediumPlotElementVertical />
          <MediumPlotElementVertical />
        </div>
       
      </div>
      <div className={styles.sec2row3}>
        <LargePlotElement />
        <LargePlotElement />
        <LargePlotElement />
        <div className={styles.sec2row3col}>
          <CircleBlocker />
          <MediumPlotElementVertical />
        </div>

      </div>
      <div className={styles.sec2row4}>
        <div className={styles.sec2row4col1}>
          <LargePlotElement />
          <CircleBlocker />
        </div>
        <div className={styles.sec2row4col1}>
          <LargePlotElement />
          <CircleBlocker />
        </div>
        <div className={styles.sec2row4col1}>
          <LargePlotElement />
          <CircleBlocker />
        </div>
  
        <div className={styles.sec2row4col4}>
        <MediumPlotElementVertical />
          <CircleBlocker />
          <MediumPlotElementVertical />
        </div>
      </div>
    </div>
  );
}