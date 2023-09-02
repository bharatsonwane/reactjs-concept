import React from 'react'
import Props1ParentToChild from './Props1ParentToChild'
import Props2ChildToParent from './Props2ChildToParent'

function AppH01() {


    return (
        <div>
            <Props1ParentToChild />
            <h1 style={{ color: 'red' }}>---------------------------------</h1>
            {/* we can pass data from a child component to its parent component by using callback functions */}
            <Props2ChildToParent />
        </div>
    )
}

export default AppH01
