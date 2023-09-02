import React, { Component } from 'react'
import ClickCounter from './hoc1/ClickCounter'
import HoverCounter from './hoc1/HoverCounter'

class Hoc1 extends Component {
    render() {
        return (
            <React.Fragment>
                <ClickCounter name='Vishwas' />
                <HoverCounter />
            </React.Fragment>
        )
    }
}

export default Hoc1