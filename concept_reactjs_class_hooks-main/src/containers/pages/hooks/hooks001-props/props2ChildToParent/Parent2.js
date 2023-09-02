import React from 'react'
import Child2 from './Child2'

function Parent2() {

    const handleRecivedPropsFromChild = (arg1) => {
        console.log("handleRevicedProps function", arg1)
    }
    return (
        <div>
            <Child2
                provideProps={(childData) => handleRecivedPropsFromChild(childData)}
                testProps={() => { }}
            />
        </div>
    )
}

export default Parent2
