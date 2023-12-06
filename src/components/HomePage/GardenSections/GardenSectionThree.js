import styles from '../../styles/HomePage/GardenSectionThree.module.css';
import LargePlotElement from '../Plots/LargePlotElement';
import MediumPlotElementHorizontal from '../Plots/MediumPlotElementHorizontal';
import MediumPlotElement from '../Plots/MediumPlotElementVertical';
import CircleBlocker from '../Plots/CircleBlocker';

export default function GardenSectionThree() {
  return (
    <div className={styles.section3Container}>
      <div className={styles.sec3Column}>
        <div className={styles.sec3row}>
          <LargePlotElement />
          <LargePlotElement />
          <MediumPlotElementHorizontal />

        </div>
      </div>
      <div className={styles.sec3Column}>
        <div className={styles.sec3row}>
          <LargePlotElement />
          <LargePlotElement />
          <MediumPlotElementHorizontal />

        </div>
      </div>
      <div className={styles.sec3Column}>
        <div className={styles.sec3row}>
          <LargePlotElement />
          <LargePlotElement />
          <MediumPlotElementHorizontal />


        </div>
      </div>
      <div className={styles.sec3Column}>
        <div className={styles.sec3row4}>
          <MediumPlotElement />
          <CircleBlocker />
          <MediumPlotElement />
          <CircleBlocker />
          <MediumPlotElement />
          <CircleBlocker />
        </div>
      </div>
    </div>
  );
}