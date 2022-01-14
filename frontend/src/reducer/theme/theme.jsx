const defaultBackground = ( state = null, action ) => {
  switch( action.type ){
    case 'DEFAULTBACKGROUND':
      return action.value
    default:
      return state  
  }
}

export { defaultBackground };