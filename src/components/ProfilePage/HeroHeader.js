import styles from "../styles/ProfilePage/HeroHeader.module.css";
import userImage from "../images/user-image.png";

export default function HeroHeader() {
  return (
    <div className={styles.heroHeaderContainer}>
      <div className={styles.heroHeaderImageContainer}>
        <img src={userImage} alt="profile"></img>
      </div>
      <div className={styles.heroHeaderNameContainer}>
        <h1>Meet Anne Smith</h1>
      </div>
    </div>
  );
}