import styles from "../styles/ProfilePage/ProfilePageIndex.module.css"

import HeroHeader from "./HeroHeader";
import PlantsGrowing from "./PlantsGrowing";
import AboutSection from "./AboutSection";

export default function ProfilePageIndex() {
  return (
    <div className={styles.profilePageContainer} style={{height: "90vh"}}>
      <HeroHeader />
      <div className={styles.aboutSectionIndexContainer}>
        <PlantsGrowing />
        <AboutSection />
      </div>
    </div>
  );
}