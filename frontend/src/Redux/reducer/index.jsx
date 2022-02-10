import { combineReducers } from "redux";
import { defaultBackground } from './theme/reducer-theme';
import { categories, categoryId, serviceId, services, workersId, workers, selectedValues } from './booking/reducer-booking';

const allReducer = combineReducers({
  defaultBackground: defaultBackground,
  categories: categories,
  categoryId: categoryId,
  serviceId: serviceId,
  services: services,
  workersId: workersId,
  workers: workers,
  selectedValues: selectedValues
});

export default allReducer




