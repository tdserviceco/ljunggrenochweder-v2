import { combineReducers } from "redux";
import { defaultBackground } from './theme/reducer-theme';

const allReducer = combineReducers({
  defaultBackground: defaultBackground
});

export default allReducer




