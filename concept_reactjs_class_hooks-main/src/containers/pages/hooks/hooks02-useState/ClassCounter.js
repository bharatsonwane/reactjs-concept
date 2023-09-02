import React, { Component } from 'react'

/**
 * @description state
 */
class ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={()=> this.incrementCount()}>Count {this.state.count}</button>
                {/* <button onClick={this.incrementCount}>Count {this.state.count}</button> */}
            </React.Fragment>
        )
    }
}

export default ClassCounter
