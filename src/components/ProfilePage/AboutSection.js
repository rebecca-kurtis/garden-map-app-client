import styles from "../styles/ProfilePage/AboutSection.module.css"
export default function AboutSection(props) {

  const description = props.profileInfo[0].udescription;
  return (
    <div className={styles.aboutSectionContainer}>
      <h2>About the Plot:</h2>
      <p>{description}</p>
    </div>
  );
}