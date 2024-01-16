import axios from 'axios';
const usersRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/users";

export default async function getAllUsers() {
  const { data } = await axios.get(usersRoute);
  // setData(data);
  // console.log('users data:', data);
      // setUsers(data);
      // return usersList;
      return data;

};
