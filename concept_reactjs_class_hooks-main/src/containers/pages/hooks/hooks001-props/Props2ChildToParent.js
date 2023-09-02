import React from 'react'
import Parent2 from "./props2ChildToParent/Parent2"
import Parent3 from './props2ChildToParent/Parent3'

function Props2ChildToParent() {
    return (
        <div>
            <Parent2 />
            <h6>----------------------------------------------------------</h6>
            {/* should know useState hook */}
            <Parent3 />
        </div>
    )
}

export default Props2ChildToParent
