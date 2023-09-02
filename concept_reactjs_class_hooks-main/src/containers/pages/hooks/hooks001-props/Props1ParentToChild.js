import React from 'react'
import Parent1 from './props1ParentToChild/Parent1'
import Greet from './props1ParentToChild/Greet'

function Props1ParentToChild() {
    return (
        <div>
            {/* <Greet name="Diana" heroName="Wonder Woman" />
            <Greet name="Bruce" heroName="Batman"> This is G Children props 1 </Greet>
            <Greet name="Clark" heroName="Superman"> <button>Action</button> </Greet> */}
            <h6>----------------------------------------------------------</h6>
            {/* should know useState hook */}
            <Parent1 treeName="Banyan" />
        </div>
    )
}

export default Props1ParentToChild
