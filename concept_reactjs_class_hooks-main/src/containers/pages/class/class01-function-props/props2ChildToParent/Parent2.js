import React, { Component } from 'react'
import Child2 from './Child2'

export class Parent2 extends Component {
    handleRecivedPropsFromChild = (val) => {
        // see in the console
        console.log("handleRevicedProps function", val)
    }
    render() {
        return (
            <div>
                <Child2 provideProps={(val) => this.handleRecivedPropsFromChild(val)} />
            </div>
        )
    }
}

export default Parent2

