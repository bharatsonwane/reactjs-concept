import React, { Component } from 'react'
import WithCounter2 from './WithCounter2'


class HoverCounter2 extends Component {
    
    render() {
        const {count, incrementCount} = this.props
        return (
            // <div>
            //     <h2 onMouseOver={incrementCount}> Hovered {count} times</h2>
            // </div>
            <WithCounter2>
                <h1>This is from HoverCounter2</h1>
                <h2 onMouseOver={incrementCount}> Hovered {count} times</h2>
            </WithCounter2>
        )
    }
}

export default HoverCounter2
