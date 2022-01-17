const categories = (state = null, action) => {
  switch (action.type) {
    case 'CATEGORIES':
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



export { categories, serviceId, services };