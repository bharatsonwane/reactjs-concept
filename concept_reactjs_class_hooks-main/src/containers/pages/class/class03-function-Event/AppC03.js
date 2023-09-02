import React, { Component } from 'react'
import FunctionClick from './FunctionClick'
import ClassClick from './ClassClick'
import EventBind from './EventBind'

export class AppC03 extends Component {
    render() {
        return (
            <React.Fragment>
                <FunctionClick />
                <h1>---------------------</h1>
                <ClassClick />
                <h1>---------------------</h1>
                <EventBind />
            </React.Fragment>
        )
    }
}

export default AppC03
