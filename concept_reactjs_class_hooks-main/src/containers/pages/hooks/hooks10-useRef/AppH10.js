import React from 'react'
import ClassTimer from './ClassTimer'
import FocusInput from './FocusInput'
import HookTimer from './HookTimer'
import PersistMutableValue from './PersistMutableValue'


/**
 * @description The useRef Hook allows you to persist values between renders.
 * It can be used to store a mutable value that does not cause a re-render when updated.
 */
function AppH10() {
    return (
        <div>
            <PersistMutableValue />
            {/* <FocusInput /> */}
            {/* <ClassTimer /> */}
            {/* <HookTimer /> */}
        </div>
    )
}

export default AppH10
