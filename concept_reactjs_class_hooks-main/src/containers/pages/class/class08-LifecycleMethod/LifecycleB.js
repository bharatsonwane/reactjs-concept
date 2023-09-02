import React, { Component } from 'react'

class LifecycleB extends Component {
    // // lifecycles execution order ==> 1st method ==> constructor 
    constructor(props) {
        super(props)

        this.state = {
            name: 'Vishwas'
        }
        console.log("LifecycleB Constructor")
    }


    // // lifecycles execution order ==> 2nd method ==> getDerivedStateFromProps 
    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleB getDerivedStateFromProps")
        return null
    }

    // // lifecycles execution order ==> 4th method ==> componentDidMount 
    componentDidMount() {
        console.log("LifecycleB componentDidMount")
    }

    //--
    shouldComponentUpdate() {
        console.log("LifecycleB shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleB getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("LifecycleB componentDidUpdate")
    }

    // // lifecycles execution order ==> 3rd method ==> render 
    render() {
        console.log('LifecycleB Render')
        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}

export default LifecycleB
