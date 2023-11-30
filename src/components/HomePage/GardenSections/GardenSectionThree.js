import styles from '../../styles/GardenSectionThree.module.css';
import LargePlotElement from '../Plots/LargePlotElement';
import MediumPlotElement from '../Plots/MediumPlotElement';

export default function GardenSectionThree() {
  return (
    <div className={styles.section3Container}>
      <div className={styles.sec3Column}>
        <div className={styles.sec3row1}>
          <LargePlotElement />
          <LargePlotElement />

        </div>
      </div>
      <div className={styles.sec3Column}>
        <div className={styles.sec3row2}>
          <LargePlotElement />
          <LargePlotElement />
        </div>
      </div>
      <div className={styles.sec3Column}>
        <div className={styles.sec3row3}>
          <LargePlotElement />
          <LargePlotElement />

        </div>
      </div>
      <div className={styles.sec3Column4}>
        <div className={styles.sec3row4}>
          <MediumPlotElement />

        </div>
      </div>
    </div>
  );
}