import styles from '../../styles/GardenSectionOne.module.css';
import CircleBlocker from '../Plots/CircleBlocker';
import LargePlotElement from '../Plots/LargePlotElement';
import MediumPlotElementHorizontal from '../Plots/MediumPlotElementHorizontal';
import SmallPlotElement from '../Plots/SmallPlotElement';

export default function GardenSectionOne() {
  return (
    <div className={styles.gardenSectionOneContainer}>
      <div className={styles.sec1row1}>
        <MediumPlotElementHorizontal />
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