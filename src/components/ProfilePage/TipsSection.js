import styles from "../styles/ProfilePage/TipsSection.module.css";

export default function TipsSection(props) {
  // console.log("props from tips", props);
  const tipsArray = [];

  for (const obj in props.profileInfo) {
    // console.log(props.profileInfo[obj]);

    tipsArray.push(props.profileInfo[obj].tdescription);
  }
  function removeTipsDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
  }

  const newTipsArray = removeTipsDuplicates(tipsArray);

  const mappedTips = newTipsArray.map((tip) => (
    <li className={styles.plantsGrowingLiContainer}>
      <p>{tip}</p>
    </li>
  ));
  return (
    <div className={styles.tipsSectionContainer}>
      <h2>Tips:</h2>
      <ul>{mappedTips}</ul>
    </div>
  );
  // }
}
