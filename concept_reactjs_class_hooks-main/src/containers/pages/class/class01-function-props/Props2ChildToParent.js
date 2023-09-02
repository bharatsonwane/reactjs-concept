import React, { Component } from 'react'
import Parent2 from './props2ChildToParent/Parent2'

export class Props2ChildToParent extends Component {
    render() {
        return (
            <div>
                <Parent2 />
            </div>
        )
    }
}

export default Props2ChildToParent
