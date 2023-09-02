import React from 'react'

const Greet = (props) => {
    console.log(props)
    // const props1 = {
    //     name: "Diana",
    //     heroName: "Wonder Woman"
    // }
    return (
        <div>
            <h5>
                Hello {props.name} a.k.a {props.heroName}
            </h5>
            {props.children}
        </div>
    )
}

export default Greet