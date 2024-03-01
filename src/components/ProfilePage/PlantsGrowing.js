import styles from "../styles/ProfilePage/PlantsGrowing.module.css";

export default function PlantsGrowing(props) {
  const plantsArray = props.plants;
  const plantInfoArray = props.plantInfo;
  const plantsIcons = [];
  const plotID = parseInt(props.plotID);

  for (let plotObject in plantsArray) {
    for (let plantInfoObject in plantInfoArray) {
      if (
        plantsArray[plotObject].plot_id === plotID &&
        plantsArray[plotObject].plant_id ===
          plantInfoArray[plantInfoObject].plant_id
      ) {
        plantsIcons.push([plantInfoArray[plantInfoObject].name, plantInfoArray[plantInfoObject].photo_url]);
      }
    }
  }
  const mappedIcons = plantsIcons.map((array) => (
    <li className={styles.plantsGrowingLiContainer}>
      <span className={styles.roundCircleLi}>&#9679;</span>
      <img
        className={styles.plantsGrowingIconImage}
        src={require("./../images/PlantIcons/" + array[1] + ".png")}
        alt="icon"
      ></img>
      <p className={styles.plantP}>{array[0]}</p>
    </li>
  ));

  return (
    <div className={styles.plantsGrowingContainer}>
      <h2 className={styles.planth2}>Plants Growing:</h2>
      <ul>{mappedIcons}</ul>
    </div>
  );
}
