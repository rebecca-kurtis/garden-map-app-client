import axios from 'axios';
const checkUserRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/checkUserRoute";

export default async function checkIfUserOwnsPlot(plotID, userID) {
  // const form = {
  //   plotID: plotID,
  //   userID: userID
  // }
  // console.log("form", form);
  // const { data } = await axios.get(checkUserRoute, form);
  // setData(data);
  // console.log('plants data:', data);
      // setUsers(data);
      // return usersList;
      // return data;

      await axios
      .get(checkUserRoute, {
        params: {
          plotID: plotID,
          userID: userID
        }
      })
      .then((response) => {
        console.log("response from check", response);
        // props.setUserID(response.data.user_id)
        // const data = response.data.loginKey;

        // updateUserStorage(response.data.user_id);
        // console.log("local storage:", localStorage)

        // setForm(data[0]);
        // toggleAccount();
        // setForm(data[0]);
        // getUserOrderInfo(response.data.cartKey)
        // console.log("formData", form);

        return response.data;
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