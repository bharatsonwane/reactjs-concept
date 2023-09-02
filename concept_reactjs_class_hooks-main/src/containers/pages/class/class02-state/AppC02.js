import React, { Component } from 'react'
import Counter from './Counter'
import Message from './Messagae'

class AppC02 extends Component {
    render() {
        return (
            <React.Fragment>
                <Message message="Message from AppC02.js" />
                <h1>----------------------</h1>
                <Counter />
            </React.Fragment>
        )
    }
}

export default AppC02
