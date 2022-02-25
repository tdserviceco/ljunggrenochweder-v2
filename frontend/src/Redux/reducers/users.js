
const getUsers = (state = [], action) => {
  switch (action.type) {
    case 'GET-USERS':
      return action.value
    default:
      return state
  }
}

export { getUsers };