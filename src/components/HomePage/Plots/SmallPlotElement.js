import styles from '../../styles/HomePage/SmallPlotElement.module.css';

export default function SmallPlotElement(props) {
  // console.log('plot props', props)
  const array = props.icons;
  const onClickFunc = props.onclick;


  const mappedIcons = array.map((url, index) => <img className={styles.iconImage} key={index} src={require('../../images/PlantIcons/' + url + '.png')} alt="icon" />)
  console.log('test', mappedIcons)
  return (
    <div className={styles.smallPlotElementContainer}>
      <div className={styles.smallPlotElement} onClick={() => onClickFunc(props.plotID)}>
        <div className={styles.iconSmallContainer}>
        <div className={styles.iconElementRow}>{mappedIcons[0]}{mappedIcons[1]}</div>
        <div className={styles.iconElementRow}>{mappedIcons[2]}{mappedIcons[3]}</div>
        </div>
        

      </div>
    </div>
  );
}