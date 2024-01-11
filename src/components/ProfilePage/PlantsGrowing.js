import styles from "../styles/ProfilePage/PlantsGrowing.module.css";

export default function PlantsGrowing(props) {
  console.log('plants plants props', props)
  const plantsArray = props.plants;
  const plantInfoArray = props.plantInfo;
  const plantsIcons = [];
  
  for (let plantObject in plantsArray) {
  for (let plantInfoObject in props.plantInfo) {
    // console.log(props.plotID)

    // console.log('plantsArray[plantObject].plot_id', plantsArray[plantObject].plot_id)
    // console.log('plantsArray[plantObject].plant_id', plantsArray[plantObject].plant_id)
    // console.log('props.plantInfo[plantInfoObject].plant_id', props.plantInfo[plantInfoObject].plant_id)

    if (
      plantsArray[plantObject].plot_id === props.plotID &&
      plantsArray[plantObject].plant_id ===
      plantInfoArray[plantInfoObject].plant_id
    ) {
      console.log('test')
      plantsIcons.push(plantInfoArray[plantInfoObject].photo_url);
      // console.log('plantsicons', plantsIcons);
    }
    // console.log(plantInfoArray[plantInfoObject].photo_url);
    // console.log('1', plantsArray[plantObject])
    // console.log('2', props.plantInfo[plantInfoObject])
  }
  

}
// console.log('plantsicons', plantsIcons);
// console.log('plantsarray', plantsArray);
  // const mappedIcons = array.map(url => <img className={styles.iconImage} src={require('../../images/PlantIcons/' + url + '.png')} alt="icon" />)

  return (
    <div className={styles.plantsGrowingContainer}>
      <h2>Plants Growing:</h2>
      
    </div>
  );
}