import React, { useReducer } from 'react'

// defining initial state for useReducer
const initialState = 0

// defining reducer function for useReducer
// reducer function accept 2 values & return single value i.e. new state
const reducer = (state, action) => {
    switch (action) {
        case 'increment':    // action
            return state + 1 //new state
        case 'decrement':    // action
            return state - 1
        case 'reset':        // action
            return initialState
        default:
            return state
    }
}

function CounterOne() {
    // destructuring useReducer in  current state i.e. count & method i.e dispatch
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <React.Fragment>
            <div>Count = {count} </div>
            <button onClick={()=> dispatch('increment')}>Increment</button>
            <button onClick={()=> dispatch('decrement')}>Decrement</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </React.Fragment>
    )
}

export default CounterOne
