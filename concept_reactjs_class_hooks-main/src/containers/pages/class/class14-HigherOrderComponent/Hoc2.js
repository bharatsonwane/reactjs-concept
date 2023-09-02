import React, { Component } from 'react'
import ClickCounter2 from './hoc2/ClickCounter2'
import HoverCounter2 from './hoc2/HoverCounter2'

class Hoc2 extends Component {
    render() {
        return (
            <React.Fragment>
                <ClickCounter2 name='Vishwas' />
                {/* <HoverCounter2 /> */}
            </React.Fragment>
        )
    }
}

export default Hoc2