import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

import "./App.css";
import Header from "./components/_partials/_Header";
import Footer from "./components/_partials/_Footer";
import HomePageIndex from "./components/HomePage/HomePageIndex";
import ProfilePageIndex from "./components/ProfilePage/ProfilePageIndex";

import getAllUsers from "./helpers/getAllUsers";
import getAllPlants from "./helpers/getAllPlants";
import getAllPlantedPlants from "./helpers/getAllPlantedPlants";
import Login from "./components/_partials/_Login";


function App() {
  let [users, setUsers] = useState([]);
  let [plantedPlants, setPlantedPlants] = useState([]);
  let [plants, setPlants] = useState([])

  // const usersRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/users";

  // const getAllUsers = async () => {
  //   const { data } = await axios.get(usersRoute);
  //   // setData(data);
  //   console.log('data', data);
  //       setUsers(data);
  //       // return usersList;

  // };
  useEffect(() => {
    getAllUsers()
    .then((data) => {
      setUsers(data);
      // console.log('data from inside', data)
      // console.log('users from inside', users)
    });

    getAllPlantedPlants()
    .then((data) => {
      setPlantedPlants(data);
      // console.log('data from inside', data)
      // console.log('users from inside', users)
    });

    getAllPlants()
    .then((data) => {
      setPlants(data);
      // console.log('data from inside', data)
      // console.log('users from inside', users)
    });

  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePageIndex plants={plants} plantedPlants={plantedPlants}/>} />
          <Route path="/plots/:id" element={<ProfilePageIndex plants={plants} plantedPlants={plantedPlants}/>} />
          {/* <Route path="/login" element={<Login/>} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}


export default App;
