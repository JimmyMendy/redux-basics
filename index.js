const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

// ACTION

// actions type 
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'


function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: 'Ice Ice Baby'
  }
}


// REDUCER
// const INITIAL_STATE = {
//   numOfCakes: 10,
//   numOfIceCreams: 20
// }

// const cakeReducer = (state = INITIAL_STATE, action) => {
//   switch(action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1
//       }
    
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams - 1
//       }
  
//     default: return state
//   }
// }

const INITIAL_CAKE_STATE = {
  numOfCakes: 10
}

const INITIAL_ICECREAM_STATE = {
  numOfIceCreams: 20
}



const cakeReducer = (state = INITIAL_CAKE_STATE, action) => {
  switch(action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
      default: return state
  }
}


const iceCreamReducer = (state = INITIAL_ICECREAM_STATE, action) => {
  switch(action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      }

      default: return state
  }
}



// Store

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => {})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()