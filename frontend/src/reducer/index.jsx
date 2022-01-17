import { combineReducers } from "redux";
import { defaultBackground } from './theme/theme';
import { categories, serviceId, services } from './booking/booking';

const allReducer = combineReducers({
  defaultBackground: defaultBackground,
  categories: categories,
  serviceId: serviceId,
  services: services
});

export default allReducer




