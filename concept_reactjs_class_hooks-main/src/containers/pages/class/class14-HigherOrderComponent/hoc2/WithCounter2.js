import React from 'react'

class WithCounter2 extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            // return { count: prevState.count + incrementNumber }
            return { count: prevState.count + 1 }
        })
    }
    render() {
        console.log(this.props.name)
        return (
            <React.Fragment>
                <h3>This is from withCounter2.js file</h3>
                {/* count={this.state.count} incrementCount={this.incrementCount} {...this.props}  */}
                {this.props.children}
            </React.Fragment>
        )
    }
}

export default WithCounter2