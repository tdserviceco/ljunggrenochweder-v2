const checkCategories = (state = false, action) => {
  switch (action.type) {
    case 'CHECKCATEGORIES':
      return action.value
    default:
      return state
  }
}
const checkService = (state = false, action) => {
  switch (action.type) {
    case 'CHECKSERVICE':
      return action.value
    default:
      return state
  }
}
/* Not used at the moment */
const checkWorkers = (state = false, action) => {
  switch (action.type) {
    case 'CHECKWORKERS':
      return action.value
    default:
      return state
  }
}


const categories = (state = null, action) => {
  switch (action.type) {
    case 'CATEGORIES':
      return action.value
    default:
      return state
  }
}

const categoryId = (state = null, action) => {
  switch (action.type) {
    case 'CATEGORYID':
      return action.value
    default:
      return state
  }
}


const serviceId = (state = null, action) => {
  switch (action.type) {
    case 'SERVICEID':
      return action.value
    default:
      return state
  }
}

const services = (state = null, action) => {
  switch (action.type) {
    case 'SERVICES':
      return action.value
    default:
      return state
  }
}

const workersId = (state = null, action) => {
  switch (action.type) {
    case 'WORKERSID':
      return action.value
    default:
      return state
  }
}

const workers = (state = null, action) => {
  switch (action.type) {
    case 'WORKERS':
      return action.value
    default:
      return state
  }
}

const workerTimeSchedule = (state = null, action) => {
  switch (action.type) {
    case 'WORKETIMESCHEDULE':
      return action.value
    default:
      return state
  }
}


export { categories, categoryId, serviceId, services, workersId, workers, workerTimeSchedule, checkCategories, checkService, checkWorkers };