import styles from "../styles/Header.module.css";
import logo from "../images/CCG_logo.png";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} className="img-logo" alt="logo" />
      </div>
      <div className={styles.buttonContainer}>
        <button className="header-button">Visit our main website</button>
      </div>
    </div>
  );
}