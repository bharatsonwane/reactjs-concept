import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // this.setState(
        //     {
        //         count: this.state.count + 1
        //     },
        //     () => {
        //         console.log('Callback Value', this.state.count)
        //     }
        // ) //2nd parameter of setState is callback function
        // console.log(this.state.count)
        // //see 11th video of js in codevolution

        this.setState((prevstate, props) => ({
            count : prevstate.count + 1
        }))
        console.log(this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={() => { this.increment() }}>Increment</button><br />
                <button onClick={() => { this.incrementFive() }}>Increment Five</button>
            </div>
        )
    }
}

export default Counter
