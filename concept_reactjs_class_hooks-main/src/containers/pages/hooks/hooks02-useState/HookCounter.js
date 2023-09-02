import React, { useState } from 'react'

/**
 * @description state
 */
function HookCounter() {

    const [count, setCount] = useState(0)
    console.log(count)

    return (
        <React.Fragment>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </React.Fragment>
    )
}

export default HookCounter
