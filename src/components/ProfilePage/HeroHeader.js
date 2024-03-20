import styles from "../styles/ProfilePage/HeroHeader.module.css";
import userImage from "../../components/images/plantpots.jpg";

export default function HeroHeader(props) {
  const fName = props.profileInfo[0].fname;
  const lName = props.profileInfo[0].lname;

  return (
    <div className={styles.heroHeaderContainer}>
      <div className={styles.heroHeaderImageContainer}>
        <img src={userImage} alt="profile"></img>
      </div>
      <div className={styles.heroHeaderNameContainer}>
        <h1>{fName} {lName}</h1>
      </div>
    </div>
  );
}