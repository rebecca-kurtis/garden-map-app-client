import styles from "../../styles/ProfilePage/HeroHeader.module.css";
import userImage from "../../images/user-image.png";

export default function EditHeroHeader(props) {
  const name = props.profileInfo[0].user_name;
  return (
    <div className={styles.heroHeaderContainer}>
      <div className={styles.heroHeaderImageContainer}>
        <img src={userImage} alt="profile"></img>
      </div>
      <div className={styles.heroHeaderNameContainer}>
        <h1>{name}</h1>
      </div>
    </div>
  );
}