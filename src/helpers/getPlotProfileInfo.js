import axios from 'axios';
// const plantedPlantsRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/plots/";

export default async function getPlotProfileInfo(id) {
  const plantProfileRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/plots/" + id;

  const { data } = await axios.get(plantProfileRoute);
  // setData(data);
  console.log('plantProfileRoute data:', data);
      // setUsers(data);
      // return usersList;
      return data;

};