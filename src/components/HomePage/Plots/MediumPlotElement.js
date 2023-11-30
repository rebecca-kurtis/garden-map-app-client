import styles from '../../styles/MediumPlotElement.module.css';

export default function MediumPlotElement() {
  return (
    <div className={styles.mediumPlotElementContainer}>
      mediumPlotElement
      <div className={styles.mediumPlotElement}>
        <div className={styles.iconElement}>icon</div>
      </div>
    </div>
  );
}