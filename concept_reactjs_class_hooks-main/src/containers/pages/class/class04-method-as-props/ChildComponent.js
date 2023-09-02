import React from 'react'

function ChildComponent(props) {
    return (
        <div>
             {/*  */}
            {/* <button onClick={props.greetHanlder}>Greet Parent</button> */}

             {/* // pass parameter from child component to parent component */}
            <button onClick={() => props.greetHanlder("1st child", "2nd child")}>Greet Parent 2</button>
        </div>
    )
}

export default ChildComponent
