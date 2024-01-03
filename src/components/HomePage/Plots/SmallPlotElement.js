import styles from '../../styles/HomePage/SmallPlotElement.module.css';

export default function SmallPlotElement(props) {
  console.log('plot props', props)
  const array = props.icons

  const mappedIcons = array.map(url => <img className={styles.iconImage} src={require('../../images/PlantIcons/' + url + '.png')} alt="icon" />)

  return (
    <div className={styles.smallPlotElementContainer}>
      <div className={styles.smallPlotElement}>
        <div className={styles.iconElement}>{mappedIcons}</div>
      </div>
    </div>
  );
}