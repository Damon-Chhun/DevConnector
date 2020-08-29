import { SET_ALERT, REMOVE_ALERT } from "./types";
import uuid from "uuid/v4";

export const setAlert = (msg, alertType) => dispatch => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    data: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, data: id }), 5000);
};
