import { combineReducers } from "redux";
import { defaultBackground } from './theme/theme';
import { categories, serviceId, services, workersId } from './booking/booking';

const allReducer = combineReducers({
  defaultBackground: defaultBackground,
  categories: categories,
  serviceId: serviceId,
  services: services,
  workersId: workersId
});

export default allReducer




