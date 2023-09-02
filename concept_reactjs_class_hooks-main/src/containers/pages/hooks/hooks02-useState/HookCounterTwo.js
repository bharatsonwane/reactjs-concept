import React, { useState } from 'react'

/**
 * @description previous state
 */
function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    // console.log(count)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
        // console.log(count)
    }

    return (
        <React.Fragment>
            count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment5</button>
        </React.Fragment>
    )
}

export default HookCounterTwo
