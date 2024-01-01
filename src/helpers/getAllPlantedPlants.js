import axios from 'axios';
const plantedPlantsRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/plantedPlants";

export default async function getAllPlantedPlants() {
  const { data } = await axios.get(plantedPlantsRoute);
  // setData(data);
  console.log('plantedPlants data:', data);
      // setUsers(data);
      // return usersList;
      return data;

};