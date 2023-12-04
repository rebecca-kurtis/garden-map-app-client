import styles from '../../styles/SmallPlotElement.module.css';

export default function SmallPlotElement() {
  return (
    <div className={styles.smallPlotElementContainer}>
      <div className={styles.smallPlotElement}>
        <div className={styles.iconElement}>icon</div>
      </div>
    </div>
  );
}