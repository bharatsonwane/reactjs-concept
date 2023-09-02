import React, { Component } from 'react'
import LifecycleA from "./LifecycleA";
import FragmentDemo from "./FragmentDemo";
import Tables from "./Tables"

class AppC08 extends Component {
    render() {
        return (
            <div>
                <h1>This is from App.js</h1><br />
                <LifecycleA />
                <h1>------------------</h1>
                {/* <FragmentDemo/> */}
                <h1>------------------</h1>
                {/* <Tables /> */}
                
                
            </div>
        )
    }
}

export default AppC08
