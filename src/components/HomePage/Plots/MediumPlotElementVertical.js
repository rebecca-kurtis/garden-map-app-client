import styles from '../../styles/HomePage/MediumPlotElementVertical.module.css';

export default function MediumPlotElementVertical(props) {
  const array = props.icons

  const mappedIcons = array.map(url => <img className={styles.iconImage} src={require('../../images/PlantIcons/' + url + '.png')} alt="icon" />)
  return (
    <div className={styles.mediumPlotElementContainer}>
      <div className={styles.mediumPlotElement}>
        <div className={styles.iconElement}>{mappedIcons}</div>
      </div>
    </div>
  );
}