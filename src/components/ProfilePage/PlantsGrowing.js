import styles from "../styles/ProfilePage/PlantsGrowing.module.css";

export default function PlantsGrowing(props) {
  console.log("plants plants props", props);
  const plantsArray = props.plants;
  const plantInfoArray = props.plantInfo;
  const plantsIcons = [];
  const plotID = parseInt(props.plotID);

  for (let plotObject in plantsArray) {
    for (let plantInfoObject in plantInfoArray) {
      // console.log(props.plotID)

      // console.log('plantsArray[plantObject].plot_id', plantsArray[plotObject].plot_id)
      // console.log('plantsArray[plantObject].plant_id', plantsArray[plotObject].plant_id)
      // console.log('props.plantInfo[plantInfoObject].plant_id', props.plantInfo[plantInfoObject].plant_id)

      if (
        plantsArray[plotObject].plot_id === plotID &&
        plantsArray[plotObject].plant_id ===
          plantInfoArray[plantInfoObject].plant_id
      ) {
        // console.log('test');
        plantsIcons.push([plantInfoArray[plantInfoObject].name, plantInfoArray[plantInfoObject].photo_url]);
        // console.log('plantsicons', plantsIcons);
      }
      // console.log(plantInfoArray[plantInfoObject].photo_url);
      // console.log('1', plantsArray[plantObject])
      // console.log('2', props.plantInfo[plantInfoObject])
    }
  }
  console.log('plantsicons', plantsIcons);
  // console.log('plantsarray', plantsArray);
  const mappedIcons = plantsIcons.map((array) => (
    <li className={styles.plantsGrowingLiContainer}>
      <span className={styles.roundCircleLi}>&#9679;</span>
      <img
        className={styles.plantsGrowingIconImage}
        src={require("./../images/PlantIcons/" + array[1] + ".png")}
        alt="icon"
      ></img>
      <p>{array[0]}</p>
    </li>
  ));

  return (
    <div className={styles.plantsGrowingContainer}>
      <h2>Plants Growing:</h2>
      <ul>{mappedIcons}</ul>
    </div>
  );
}
