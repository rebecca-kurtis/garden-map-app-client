import react from "react";
import GardenSectionOne from "./GardenSections/GardenSectionOne";
import GardenSectionThree from "./GardenSections/GardenSectionThree";
import GardenSectionTwo from "./GardenSections/GardenSectionTwo";

export default function HomePageIndex() {
  return (
    <div className="homePageContainer" style={{height: "90vh"}}>
      Home Page
      <div className="map-container">
        <GardenSectionOne />
        <GardenSectionTwo />
        <GardenSectionThree />
      </div>
    </div>
  );
}