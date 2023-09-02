import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true //  true or flase
        }
    }


    //  // conditional rendering 1st way ==> if/else
    // render() {
    //     if (this.state.isLoggedIn) {
    //         return (
    //             <div>
    //                 Welcome Vishwas
    //             </div>
    //         )
    //     }
    //     else {
    //         return (
    //             <div>
    //                 Welcome Guest
    //             </div>
    //         )
    //     }
    // }



    //  // conditional rendering 2nd way ==> Element varables
    // render() {
    //     let message
    //     if (this.state.isLoggedIn) {
    //         message = <div>Welcome Vishwas</div>
    //     }
    //     else {
    //         message = <div>Welcome Guest</div>
    //     }

    //     return (
    //         <div>{message}</div>
    //     )
    // }




    //  // conditional rendering 3rd way ==> Ternary Conditional Operator
    // render() {
    //     return(
    //         this.state.isLoggedIn ?
    //         <div>Welcome Vishwas</div> :
    //         <div>Welcome Guest</div>
    //     )
    // }




    //  // conditional rendering 4th way ==> Short Circuit Operator
    render() {
        return(
            this.state.isLoggedIn && <div>Welcome Vishwas</div>
        )
    }


        // return (
        //     <div>
        //         <div>Welcome Vishwas</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
}

export default UserGreeting
