import { FETCH_USER } from "./types";
import axios from "axios";

export const fetchUser = () => {
  return async dispatch => {
    console.log("calling user...");
    axios
      .get("/api/current_user")
      .then(function(response) {
        console.log(response);
        dispatch({ type: FETCH_USER, payload: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};
