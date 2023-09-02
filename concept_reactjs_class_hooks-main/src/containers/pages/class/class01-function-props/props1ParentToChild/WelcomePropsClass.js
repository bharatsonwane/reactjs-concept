import React, { Component } from "react"

// class WelcomePropsClass extends Component{
//     render(){
//         return(
//             <div>
//             <h3>Hello {this.props.name} a.k.a {this.props.heroName}</h3>
//             <p>{this.props.children}</p>
//             </div>
//         )
//     }
// }

// // destructuring props & state
class WelcomePropsClass extends Component{
    render(){
        const {name, heroName, children} = this.props
        // const (state1, state2) = this.state // simillarly 
        return(
            <div>
            <h3>Hello {name} a.k.a {heroName}</h3>
            <p>{children}</p>
            </div>
        )
    }
}

export default WelcomePropsClass