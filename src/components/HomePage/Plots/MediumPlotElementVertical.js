import styles from '../../styles/HomePage/MediumPlotElementVertical.module.css';

export default function MediumPlotElementVertical(props) {
  const array = props.icons
  const onClickFunc = props.onclick

  const mappedIcons = array.map((url, index) => <img className={styles.iconImage} key={index} src={require('../../images/PlantIcons/' + url + '.png')} alt="icon" />)
  return (
    <div className={styles.mediumPlotElementContainer}>
      <div className={styles.mediumPlotElement} onClick={() => onClickFunc(props.plotID)}>
        <div className={styles.iconElement}>{mappedIcons}</div>
      </div>
    </div>
  );
}