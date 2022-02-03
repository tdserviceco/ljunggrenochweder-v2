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

const workHours = (state = null, action) => {
  switch (action.type) {
    case 'WORKHOURS':
      return action.value
    default:
      return state
  }
}

export { categories, categoryId, serviceId, services, workersId, workers, workHours };