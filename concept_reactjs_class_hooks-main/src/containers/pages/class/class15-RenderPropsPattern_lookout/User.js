import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
                {/* {this.props.name(true)} */}
                {this.props.render(false)}
            </div>
        )
    }
}

export default User
