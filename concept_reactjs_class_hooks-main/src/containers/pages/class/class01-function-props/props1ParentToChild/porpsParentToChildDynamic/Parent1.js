import React, { Component } from 'react'
import Child1 from './Child1'

export class Parent1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
             fruitNum: "Parent Props => Apple => 0"
        }
        this.num = 0
    }
    
    handleClick = () => {
        // To rerender component props should be changed/updated & state should be changed/updated by using setState() but not mutating.
        // To update child component props parent component should be rerender
        this.num = this.num + 1
        this.setState({
            fruitNum : `Parent Props => Apple => ${this.num}`
        })
    }
    render() {
        return (
            <div>
                <button onClick={() => { this.handleClick() }} >Pass props Parent to Child</button>
                <Child1 fruitProps={this.state.fruitNum} />
            </div>
        )
    }
}

export default Parent1
