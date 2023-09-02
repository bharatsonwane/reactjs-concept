import React, { useReducer } from 'react'

// defining initial state for useReducer
const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

// defining reducer function for useReducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'reset':
            return initialState

        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return { firstCounter: state.firstCounter }
    }
}

function CounterTwo() {

    // destructuring useReducer in  current state i.e. count & method i.e dispatch
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <React.Fragment>
            <div>
                <div>First Counter = {count.firstCounter} </div>
                <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
                    Increment
                </button>
                <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
                    Decrement
                </button>
                <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
                    Increment 5
                </button>
                <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
                    Decrement 5
                </button>
            </div>

            <div>
                <div>Second Counter = {count.secondCounter} </div>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
                    Increment Counter 2
                </button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
                    Decrement Counter 2
                </button>
            </div>


            <button onClick={() => dispatch({ type: 'reset' })}>
                Reset both value
            </button>
        </React.Fragment>
    )
}

export default CounterTwo
