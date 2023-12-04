import styles from '../../styles/GardenSectionThree.module.css';
import LargePlotElement from '../Plots/LargePlotElement';
import MediumPlotElementHorizontal from '../Plots/MediumPlotElementHorizontal';
import MediumPlotElement from '../Plots/MediumPlotElementVertical';

export default function GardenSectionThree() {
  return (
    <div className={styles.section3Container}>
      <div className={styles.sec3Column}>
        <div className={styles.sec3row1}>
          <LargePlotElement />
          <LargePlotElement />
          <MediumPlotElementHorizontal />

        </div>
      </div>
      <div className={styles.sec3Column}>
        <div className={styles.sec3row2}>
          <LargePlotElement />
          <LargePlotElement />
          <MediumPlotElementHorizontal />

        </div>
      </div>
      <div className={styles.sec3Column}>
        <div className={styles.sec3row3}>
          <LargePlotElement />
          <LargePlotElement />
          <MediumPlotElementHorizontal />


        </div>
      </div>
      <div className={styles.sec3Column4}>
        <div className={styles.sec3row4}>
          <MediumPlotElement />
          <MediumPlotElement />
          <MediumPlotElement />
        </div>
      </div>
    </div>
  );
}