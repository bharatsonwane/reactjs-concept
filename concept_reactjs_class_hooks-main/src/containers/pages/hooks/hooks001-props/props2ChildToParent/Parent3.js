import React, {useState} from 'react'
import Child3 from './Child3'

function Parent3() {

    const [mangoCount, setMangoCount] = useState(0)

    const handleRecivedPropsFromChild = (arg1) => {
        console.log("handleRevicedProps function", arg1)
        setMangoCount(arg1)

    }
    return (
        <div>
            <h5>parent3 state: {mangoCount}</h5>
            <Child3
                mangoNumber={mangoCount}
                provideProps={(valueFromChild) => handleRecivedPropsFromChild(valueFromChild)}
            />
        </div>
    )
}

export default Parent3
