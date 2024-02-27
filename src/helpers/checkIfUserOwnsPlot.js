import axios from 'axios';
const checkUserRoute = process.env.REACT_APP_SERVER + "/checkUserRoute";
// const checkUserRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/checkUserRoute";


export default async function checkIfUserOwnsPlot(plotID, userID) {
  const { data } = await axios.get(checkUserRoute, {
    params: {
      plotID: plotID,
      userID: userID
    }
  });

  return data[0];

};