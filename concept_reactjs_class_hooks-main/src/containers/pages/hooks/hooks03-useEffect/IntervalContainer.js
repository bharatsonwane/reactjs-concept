import React, {useState} from 'react'
import IntervalClassCounter from './IntervalClassCounter'
import IntervalHookCounter from './IntervalHookCounter'
import IntervalHookCounter1 from './IntervalHookCounter1'

function IntervalContainer() {
    const [display, setDisplay] = useState(true)

    return (
        <React.Fragment>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <IntervalClassCounter />}
            {/* {display && <IntervalHookCounter />} */}
            {/* {display && <IntervalHookCounter1 />} */}
        </React.Fragment>
    )
}

export default IntervalContainer
