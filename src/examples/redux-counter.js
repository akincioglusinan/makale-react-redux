
const initialState = {
    count: 0
  }
  //reducer
  //blog, 
  //auth => username, isLogged true or false
  const counterReducer=(state = initialState, action) => {
    // console.log("store created")
    // return state
    switch (action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1
        }
      case 'DECREMENT':
        return {
          count: state.count - 1
        }
      default:
        return state
    }
  }
  // store
  const store = createStore(counterReducer);
  
  
  console.log(store.getState())
  
  
  store.dispatch({
    type:'INCREMENT'
  })
  
  store.dispatch({
    type: "INCREMENT"
  })
  store.dispatch({
    type: "DECREMENT"
  })
  
  console.log(store.getState())