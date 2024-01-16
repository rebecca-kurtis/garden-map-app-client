import axios from 'axios';
import getAllTips from './getAllTips';
import getPlotProfileInfo from './getPlotProfileInfo';

// let URL1 = "https://www.something.com";
// let URL2 = "https://www.something1.com";
// let URL3 = "https://www.something2.com";


// const fetchURL = (url) => axios.get(url);

// const promiseArray = [URL1, URL2, URL3].map(fetchURL);

// Promise.all(promiseArray)
// .then((data) => {
//   data[0]; // first promise resolved 
//   data[1];// second promise resolved 
// })
// .catch((err) => {
// });



// const plantedPlantsRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/plantedPlants";

export default async function getProfilePageInfo(id) {


  return Promise.all([getPlotProfileInfo(id), getAllTips() ])
.then((data) => {
  // console.log(data);
  // data[0]; // first promise resolved 
  // data[1];// second promise resolved 
})
.catch((err) => {
});
  // const { data } = await axios.get(plantedPlantsRoute);
  // setData(data);
  // console.log('plantedPlants data:', data);
  //     // setUsers(data);
  //     // return usersList;
  //     return data;

};