import axios from 'axios';
const tipsRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/tips";

export default async function getAllTips() {
  const { data } = await axios.get(tipsRoute);
  // setData(data);
  // console.log('tips:', data);
      // setUsers(data);
      // return usersList;
      return data;

};