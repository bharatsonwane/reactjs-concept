import React, {useState} from 'react'
import Child1 from './Child1'

function Parent1(props) {
    const [state, setstate] = useState({
        num : 0,
        fruitNum: "Parent Props => Apple = 0",
    })


    const handleClick = () => {
        const newNum = state.num + 1
        // state.num = state.num + 1 // // mutating state directly ==> not recommended
        // To rerender component props should be changed/updated & state should be changed/updated by using setState() but not mutating.
        // To update child component props parent component should be rerender
        setstate({
            ...state,
            num: newNum,
            fruitNum: `Parent Props => AppleNumber = ${newNum}`
        })
    }
    return (
        <div>
            <button onClick={() => { handleClick() }} >Pass props Parent to Child</button>
            <Child1 treeName={props.treeName}  fruitProps={state.fruitNum}  />
        </div>
    )
}

export default Parent1
