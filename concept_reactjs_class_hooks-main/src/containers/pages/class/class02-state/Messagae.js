import React, { Component } from 'react'

class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {
      information: "Information from Message.js",
      id: "Id State",
      message: props.message,      
    }
  }

  changeMessage() {
    this.setState({
      message: 'Thank you for subscribing!'
    })
  }

  render() {
    return (
      <div>
        <h3>{this.state.information}</h3>
        <h3>{this.state.id}</h3>
        <h3>{this.state.message}</h3>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default Message