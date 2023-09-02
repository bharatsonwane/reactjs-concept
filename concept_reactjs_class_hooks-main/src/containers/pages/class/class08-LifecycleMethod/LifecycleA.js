import React, { Component } from 'react'
import LifecycleB from "./LifecycleB"

class LifecycleA extends Component {
    // // lifecycles execution order ==> 1st method ==> constructor 
    constructor(props) {
        super(props)

        this.state = {
            name: 'Vishwas'
        }
        console.log("LifecycleA Constructor")
    }


    // // lifecycles execution order ==> 2nd method ==> getDerivedStateFromProps 
    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA getDerivedStateFromProps")
        return null
    }

    // // lifecycles execution order ==> 4th method ==> componentDidMount 
    componentDidMount(prevProps, prevState) {
        console.log("LifecycleA componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("LifecycleA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("LifecycleA componentDidUpdate")
        console.log("=============================")
    }

    handlechangeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }
    handleforceUpdate = () => {
        this.forceUpdate()
    }

    // // lifecycles execution order ==> 3rd method ==> render 
    render() {
        console.log('LifecycleA Render')
        return (
            <div>
            {console.log("LifecycleA Return")}
                <div>Lifecycle A</div>
                <button onClick={this.handlechangeState}>Change State</button>
                <LifecycleB />
                <button onClick={this.handleforceUpdate}>Force Update </button>
            </div>
        )
    }
}

export default LifecycleA
