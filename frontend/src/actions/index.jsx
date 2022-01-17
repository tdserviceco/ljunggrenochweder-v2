export const catgories = data => {
  return {
    type: 'CATEGORIES',
    value: data
  }
};

export const serviceId = id => {
  return {
    type: 'SERVICEID',
    value: Number(id)
  }
}

export const services = data => {
  return {
    type: 'SERVICES',
    value: data
  }
}

export const workersId = id => {
  return {
    type: 'WORKERSID',
    value: id
  }
}

export const defaultBackground = data => {
  return {
    type: 'DEFAULTBACKGROUND',
    value: data
  }
};