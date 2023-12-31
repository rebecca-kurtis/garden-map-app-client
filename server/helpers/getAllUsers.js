const axios = require("axios").default;

const getAllUsers = () => {

  const usersRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/users";

  axios.get(usersRoute)
  .then((response) => {
    console.log(response);
    const usersList = [...response.data];
    console.log(usersList);
    return usersList;
  })
  .catch((error) => {
    if (error.response) {
      alert(`Error! ${error.message}`);
    } else if (error.request) {
      console.log("network error");
    } else {
      console.log(error);
    }
  });

};
getAllUsers();
module.exports = {getAllUsers}