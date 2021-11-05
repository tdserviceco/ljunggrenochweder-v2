const Loading = (state = false, action) => {
  switch (action.type) {
    case 'LOADING':
      return action.value
    default:
      return state;
  }
}

export { Loading };
