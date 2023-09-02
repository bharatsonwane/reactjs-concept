import React, { Component } from 'react'
import Hoc1 from './Hoc1'
import Hoc2 from './Hoc2'

class AppC14 extends Component {
    render() {
        return (
            <React.Fragment>
                <Hoc1 />
                {/* <Hoc2 /> */}
            </React.Fragment>
        )
    }
}

export default AppC14
