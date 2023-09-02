import React from 'react'

function Child1(props) {
    return (
        <div>
            <h4 style={{ color: "purple" }}>Props from parent to Child = {props.fruitProps}</h4>
            <h4> props from Props1ParentToChild component: {props.treeName}</h4>
        </div>
    )
}

export default Child1
