import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            message: 'Hello'
        }
        // // for first 3 binding method
        // this.ClickHandler = this.ClickHandler.bind(this) 
    }

    // for first 3 binding method
    // ClickHandler(){
    //     this.setState({
    //         message : "Goodby"
    //     })
    //     console.log(this)
    // }

    // // for 4th binding method.
    ClickHandler = () => {
        this.setState({
            message : "Goodbye!"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                
                {/* 1st way binding ==> in render method  */}
                {/* <button onClick={this.ClickHandler.bind(this)}>Click</button>  */}

                {/* 2nd way binding ==> arrow function in render method  */}
                {/* <button onClick={() => this.ClickHandler()}>Click</button> */}

                {/*important 3rd way binding ==> in constructor */}
                {/* <button onClick={this.ClickHandler}>Click</button> */}

                {/*important 4th way binding ==> class property as arrow function  */}
                <button onClick={this.ClickHandler}>Click</button>

            </div>
        )
    }
}

export default EventBind
