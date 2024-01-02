import styles from '../../styles/HomePage/MediumPlotElementHorizontal.module.css';

export default function MediumPlotElementHorizontal(props) {
  console.log('plot props', props)
  const array = props.icons

  const mappedIcons = array.map(url => <img src={require('../../images/PlantIcons/' + url + '.png')} alt="icon" />)
  return (
    <div className={styles.mediumPlotElementContainer}>
      <div className={styles.mediumPlotElement}>
        <div className={styles.iconElement}>{mappedIcons}</div>
      </div>
    </div>
  );
}