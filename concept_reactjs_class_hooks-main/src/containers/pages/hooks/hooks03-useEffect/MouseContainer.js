import React, {useState} from 'react'
import HookMouse from './HookMouse'
import ClassMouse from './ClassMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)

    return (
        <React.Fragment>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <ClassMouse />}
            {/* {display && <HookMouse />} */}
        </React.Fragment>
    )
}

export default MouseContainer
