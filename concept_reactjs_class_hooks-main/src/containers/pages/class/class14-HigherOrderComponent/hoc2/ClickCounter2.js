import React, { Component } from 'react'
import WithCounter2 from './WithCounter2'

class ClickCounter2 extends Component {

    render() {
        const { count, incrementCount } = this.props
        return (
            <WithCounter2>
                <h1>This is from ClickCounter2</h1>
                <button onClick={incrementCount}>
                    {this.props.name} Clicked {count} times
                </button>
            </WithCounter2>

        )
    }
}

export default ClickCounter2
