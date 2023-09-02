import React from 'react'

const withCounter = (WrappedComponent, incrementNumber) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementNumber }
            })
        }
        render() {
            console.log(this.props.name)
            return (
                <React.Fragment>
                    <h3>This is from withCounter.js file</h3>
                    <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
                </React.Fragment>
            )
        }
    }
    return WithCounter
}

export default withCounter