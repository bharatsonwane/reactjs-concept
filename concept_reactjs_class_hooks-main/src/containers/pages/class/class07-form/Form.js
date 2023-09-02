import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            comments: "",
            topic: "react"     // initial value
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments}  ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const { username, comments, topic } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <levbel>Username: </levbel>
                    <input
                        type='text'
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea
                        name="comments"
                        value={this.state.comments}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <label>Topic: </label>
                    <select value={this.state.topic} onChange={this.handleInputChange}>
                        <option name="topic" value="react">React</option>
                        <option name="topic" value="angular">Angular</option>
                        <option name="topic" value="vue">Vue</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form
