import { combineReducers } from "redux";
import { defaultBackground } from './theme/reducer-theme';
import { categories, categoryId, serviceId, services, workersId, workers, workerTimeSchedule } from './booking/reducer-booking';

const allReducer = combineReducers({
  defaultBackground: defaultBackground,
  categories: categories,
  categoryId: categoryId,
  checkCategories: checkCategories,
  serviceId: serviceId,
  services: services,
  checkService: checkService,
  workersId: workersId,
  workers: workers,
  checkWorkers: checkWorkers,
  workerTimeSchedule: workerTimeSchedule
});

export default allReducer




