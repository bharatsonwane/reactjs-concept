import React, { Component } from 'react'

/**
 * @description previous state
 */
class classCounterTwo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={()=> this.incrementCount()}>Count {this.state.count}</button>
            </React.Fragment>
        )
    }
}

export default classCounterTwo
