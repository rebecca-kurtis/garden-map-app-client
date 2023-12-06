import styles from '../../styles/HomePage/SmallPlotElement.module.css';

export default function SmallPlotElement() {
  return (
    <div className={styles.smallPlotElementContainer}>
      <div className={styles.smallPlotElement}>
        <div className={styles.iconElement}>icon</div>
      </div>
    </div>
  );
}