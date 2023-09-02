import React, { Component } from 'react'

// // Regular component extends Component but Pure component extends PureComponent
// // use Regular component unless if you feel performance isuue
class RegComp extends Component {
  render() {
    console.log('Regular Comp render')
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}

export default RegComp
