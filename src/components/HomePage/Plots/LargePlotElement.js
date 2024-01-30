import styles from '../../styles/HomePage/LargePlotElement.module.css';


export default function LargePlotElement(props) {
  const array = props.icons;
  const onClickFunc = props.onclick;


  const mappedIcons = array.map((url, index) => <img className={styles.iconImage} key={index} src={require('../../images/PlantIcons/' + url + '.png')} alt="icon" />)

  return (
    <div className={styles.LargePlotElementContainer}>
      <div className={styles.LargePlotElement} onClick={() => onClickFunc(props.plotID)}>
        <div className={styles.iconElement}>{mappedIcons}</div>
      </div>
    </div>
  );
}