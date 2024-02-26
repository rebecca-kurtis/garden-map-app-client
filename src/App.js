import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bs5-lightbox';
import Header from "./components/_partials/_Header";
import Footer from "./components/_partials/_Footer";
import HomePageIndex from "./components/HomePage/HomePageIndex";
import ProfilePageIndex from "./components/ProfilePage/ProfilePageIndex";

import getAllUsers from "./helpers/getAllUsers";
import getAllPlants from "./helpers/getAllPlants";
import getAllPlantedPlants from "./helpers/getAllPlantedPlants";
import Login from "./components/_partials/_Login";

import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [userID, setUserID] = useState(null);
  let [plantedPlants, setPlantedPlants] = useState([]);
  let [plants, setPlants] = useState([]);
  const [ownsPlot, setOwnsPlot] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [profileInfo, setProfileInfo] = useState([]);

  useEffect(() => {
    getAllPlantedPlants().then((data) => {
      setPlantedPlants(data);
    });

    getAllPlants().then((data) => {
      setPlants(data);
    });
  }, []);

  // Set current user state
  const [user, setUser] = useLocalStorage("user", null);

  function updateUserStorage(currentUserID) {
    setUser(currentUserID);
    localStorage.clear();
    localStorage.setItem("userID", JSON.stringify(currentUserID));
    console.log("userID in function", userID);
  }

  console.log(updateUserStorage);

  // Remove current user state
  function clearUserStorage() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header
          user={user}
          updateUserStorage={updateUserStorage}
          clearUserStorage={clearUserStorage}
          setOwnsPlot={setOwnsPlot}
        />
        <Routes>
          <Route
            path="/"
            element={
              <HomePageIndex 
              plants={plants} 
              plantedPlants={plantedPlants}
              photos={photos}
              user={user}
              setPhotos={setPhotos} />
            }
          />
          <Route
            path="/plots/:id"
            element={
              <ProfilePageIndex
                plants={plants}
                plantedPlants={plantedPlants}
                user={user}
                ownsPlot={ownsPlot}
                setOwnsPlot={setOwnsPlot}
                photos={photos}
                setPhotos={setPhotos}
                profileInfo={profileInfo}
                setProfileInfo={setProfileInfo}
              />
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
