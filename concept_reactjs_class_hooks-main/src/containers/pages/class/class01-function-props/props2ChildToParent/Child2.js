import React, { Component } from 'react'

export class Child2 extends Component {
    num = 0
    handleClick = () => {
        this.num = this.num + 1
        let val = `'child Props => apple' ${this.num}` 
        this.props.provideProps(val)
    }
    render() {
        return (
            <div>
            <button onClick={() => { this.handleClick() }} >Pass props to parent</button>
            </div>
        )
    }
}

export default Child2
