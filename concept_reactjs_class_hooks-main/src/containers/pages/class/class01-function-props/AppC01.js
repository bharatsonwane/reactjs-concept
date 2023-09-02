import React, { Component } from 'react'
import Props1ParentToChild from './Props1ParentToChild'
import Props2ChildToParent from './Props2ChildToParent'

class AppCr01 extends Component {
    render() {
        return (
            <div>
                <Props1ParentToChild />
                <Props2ChildToParent />
            </div>
        )
    }
}

export default AppCr01
