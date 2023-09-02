import React from 'react'

function Child2(props) {
    let num = 0
    const handleClick = () => {
        num = num + 1
        let val = `'child Props => apple' ${num}` 
        props.provideProps(val)
        props.testProps()
    }

    return (
        <div>
            <button onClick={()=>{handleClick()}} >Pass props to parent</button>
        </div>
    )
}

export default Child2
