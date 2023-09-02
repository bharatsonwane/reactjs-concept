import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div>
                <h2>Welcome {this.props.name} a.k.a {this.props.heroName}</h2>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome
