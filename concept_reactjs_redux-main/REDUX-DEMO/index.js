const redux = require('redux')       // calling redux from library
const createStore = redux.createStore
const combineRducers = redux.combineReducers


// // ##############################
// // ########## action ##########

// // ******** action Types ******
const BUY_CAKE = 'BUY_CAKE' // type of action
const BUY_ICECREAM = 'BUY_ICECREAM'


// //  ******** action Creator ******
// // action describe what happned but dont described how application state changes
// // @action creater is function which return @action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'Fist redux action'
    }
}

function buyIcreCream() {
    return {
        type: BUY_ICECREAM
    }
}

// // ##############################
// // ########## rducer ##########

// // ******* initial state ********
// (previousState, action) => newState
// state of aplication

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}


// // reducer function which control how state transition happnes
// // if previousState is not provided then considering initial state as default state
const cakeReduce = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {  // copying state object and only change in numOfCakes
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {  // copying state object and only change in numOfCakes
            ...state,                // cloning state value
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
        // not mutating old object but returning new object of state
    }
}


//  // combining reducers
const rootReducer = combineRducers({
    cake: cakeReduce,
    iceCrem: iceCreamReducer
})



// // ##############################
// // ########## redux store ##########
// // for entire appliction only one store

// 1) createStore(reducer) ==> create redux store to holds application state
const store = createStore(rootReducer)


// 2) getState() ==> to acces state
console.log('Initial state', store.getState())

// // **********  ********
// 4) subscribe(listener) ==> to registers listeners 
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

// // ********* dispatch action (from UI) ********
// 3) dispatch(action) ==> to upadate state 
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcreCream())
store.dispatch(buyIcreCream())

// 5) calling function returned by subscribe(listener) ==>  unregisters listeners
unsubscribe()