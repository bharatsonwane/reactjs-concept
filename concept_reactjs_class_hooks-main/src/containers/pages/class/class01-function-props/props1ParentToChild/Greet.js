import React from 'react'

// function Greet() {
//   return <h1>Hello Vishwas</h1>
// }

const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h2>
                Hello {props.name} a.k.a {props.heroName}
            </h2>
            {props.children}
        </div>
    )
}

export default Greet