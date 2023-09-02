import React, { Component } from 'react'

export class Child1 extends Component {

    render() {
        return (
            <div>
                <h3 style={{color: "red"}}>Props from parent to Child = {this.props.fruitProps}</h3>
            </div>
        )
    }
}

export default Child1
