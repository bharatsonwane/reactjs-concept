import React, { PureComponent } from 'react'

// // Regular component extends Component but Pure component extends PureComponent
// // use Regular component unless if you feel performance isue
// //  Pure components only rerender class component when there is diffrence in shallow comparision of props and state
class PureComp extends PureComponent {
  render() {
    console.log('Pure Comp render')
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp
