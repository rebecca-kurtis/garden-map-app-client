import styles from '../../styles/HomePage/SmallPlotElement.module.css';

export default function SmallPlotElement(props) {
  // console.log('plot props', props)
  const array = props.icons;
  const onClickFunc = props.onclick;


  const mappedIcons = array.map((url, index) => <img className={styles.iconImage} key={index} src={require('../../images/PlantIcons/' + url + '.png')} alt="icon" />)

  return (
    <div className={styles.smallPlotElementContainer}>
      <div className={styles.smallPlotElement} onClick={() => onClickFunc(props.plotID)}>
        <div className={styles.iconElement}>{mappedIcons}</div>
      </div>
    </div>
  );
}