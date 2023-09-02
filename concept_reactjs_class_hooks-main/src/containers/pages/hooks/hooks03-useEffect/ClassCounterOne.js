import React, { Component } from 'react'

class ClassCounterOne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count}`
    }

    // // conditinaly updating title
    componentDidUpdate(prevProp, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('Updating Document Title')
            document.title = `Clicked ${this.state.count}`
        }
    }

    render() {
        return (
            <React.Fragment>
                <input
                    type='text'
                    value={this.state.name} onChange={e => {
                        this.setState({ name: e.target.value })
                    }} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click {this.state.count}
                </button>
            </React.Fragment>
        )
    }
}

export default ClassCounterOne
