import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() {
        console.log('clicked the button')
        alert("clicked the button")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick
