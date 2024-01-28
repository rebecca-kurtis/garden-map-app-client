import styles from "../styles/Header.module.css";
import logo from "../images/CCG_logo.png";
import Login from "./_Login";

export default function Header(props) {

  const updateUserStorage = props.updateUserStorage;

  // console.log(updateUserStorage);
  const clearUserStorage = props.clearUserStorage;
  const user = props.user;

  if (user === null) {
    return (
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <img src={logo} className="img-logo" alt="logo" />
        </div>
        <div className={styles.buttonContainer}>
          <a  href="/"><button className={styles.headerButton}>Visit our main website</button></a>
        </div>
        <div className={styles.buttonContainer}>
        <Login updateUserStorage={updateUserStorage}/>
        </div>
        
      </div>
    )
  }

  if (user !== null) {
    return (
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <img src={logo} className="img-logo" alt="logo" />
        </div>
        <div className={styles.buttonContainer}>
          <a  href="/"><button className={styles.headerButton}>Visit our main website</button></a>
        </div>
        <div className={styles.buttonContainer}>
        <Login updateUserStorage={updateUserStorage}/>
        </div>
        
      </div>
    )
  }
}