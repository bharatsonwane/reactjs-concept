import React, { Component } from 'react'
import withCounter from './withCounter'

var x = 5
class ClickCounter extends Component {

    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}>
                    {this.props.name} Clicked {count} times
                </button>
            </div>
        )
    }
}

export default withCounter(ClickCounter, x)
