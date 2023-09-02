import React, { useReducer } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function AppH06() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch }} >
            <div>
                Count - {count}
                <h3>--------------------</h3>
                <ComponentA />
                <h1>---------------------</h1>
                <ComponentB />
                <h1>---------------------</h1>
                <ComponentC />
            </div>
        </CountContext.Provider>
    )
}

export default AppH06
