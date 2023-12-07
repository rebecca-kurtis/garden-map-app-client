import styles from "../styles/ProfilePage/ProfilePageIndex.module.css"

import HeroHeader from "./HeroHeader";
import PlantsGrowing from "./PlantsGrowing";
import AboutSection from "./AboutSection";
import TipsSection from "./TipsSection";
import ShareSection from "./ShareSection";

export default function ProfilePageIndex() {
  return (
    <div className={styles.profilePageContainer}>
      <HeroHeader />
      <div className={styles.aboutSectionIndexContainer}>
        <PlantsGrowing />
        <AboutSection />
      </div>
      <TipsSection />
      <ShareSection />
    </div>
  );
}