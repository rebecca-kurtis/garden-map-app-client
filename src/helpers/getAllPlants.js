import axios from 'axios';
const plantsRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/plants";

export default async function getAllPlants() {
  const { data } = await axios.get(plantsRoute);
  // setData(data);
  // console.log('plants data:', data);
      // setUsers(data);
      // return usersList;
      return data;

};