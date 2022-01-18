import { combineReducers } from "redux";
import { defaultBackground } from './theme/reducer-theme';
import { categories, categoryId, serviceId, services, workersId, workers, workerTimeSchedule } from './booking/reducer-booking';

const allReducer = combineReducers({
  defaultBackground: defaultBackground,
  categories: categories,
  categoryId: categoryId,
  serviceId: serviceId,
  services: services,
  workersId: workersId,
  workers: workers,
  workerTimeSchedule: workerTimeSchedule
});

export default allReducer




