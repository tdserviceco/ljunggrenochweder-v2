import { combineReducers } from "redux";
import { getUsers } from "./users";
const allReducer = combineReducers({
  getUsers: getUsers
});

export default allReducer
