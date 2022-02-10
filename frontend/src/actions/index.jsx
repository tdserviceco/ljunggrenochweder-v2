export const categories = data => {
  return {
    type: 'CATEGORIES',
    value: data
  }
};

export const categoryId = id => {
  return {
    type: 'CATEGORYID',
    value: Number(id)
  }
}

export const serviceId = id => {
  return {
    type: 'SERVICEID',
    value: id
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


export const workers = data => {
  return {
    type: 'WORKERS',
    value: data
  }
}

export const defaultBackground = data => {
  return {
    type: 'DEFAULTBACKGROUND',
    value: data
  }
};

export const selectedValues = values => {
  return {
    type: 'SELECTEDVALUES',
    value: values
  }
} 