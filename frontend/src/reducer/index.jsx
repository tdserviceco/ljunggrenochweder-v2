import { combineReducers } from "redux";
import { defaultBackground } from './theme/theme';
import { categories, categoryId, checkCategories, serviceId, services, checkService, workersId, workers, checkWorkers, workerTimeSchedule } from './booking/booking';

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
  checkWorkers:checkWorkers,
  workerTimeSchedule: workerTimeSchedule
});

export default allReducer




