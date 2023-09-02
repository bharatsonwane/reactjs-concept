import React from "react"

// const GreetPropsFunction = (props) => {
//     return (
//         <div>
//             <h3>Hello {props.name} a.k.a {props.heroName}</h3>
//             <p>{props.children}</p>
//         </div>
//     )
// }

// // //Destructuring 1st way
// const GreetPropsFunction = ({name, heroName, children}) => {
//     return (
//         <div>
//             <h3>Hello {name} a.k.a {heroName}</h3>
//             <p>{children}</p>
//         </div>
//     )
// }

// //Destructuring 2nd way
const GreetPropsFunction = (props) => {
        const {name, heroName, children} = props
    return (
        <div>
            <h3>Hello {name} a.k.a {heroName}</h3>
            <p>{children}</p>
        </div>
    )
}

export default GreetPropsFunction