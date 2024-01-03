import styles from '../../styles/HomePage/LargePlotElement.module.css';


export default function LargePlotElement(props) {
  const array = props.icons

  const mappedIcons = array.map(url => <img className={styles.iconImage} src={require('../../images/PlantIcons/' + url + '.png')} alt="icon" />)

  return (
    <div className={styles.LargePlotElementContainer}>
      <div className={styles.LargePlotElement}>
        <div className={styles.iconElement}>{mappedIcons}</div>
      </div>
    </div>
  );
}