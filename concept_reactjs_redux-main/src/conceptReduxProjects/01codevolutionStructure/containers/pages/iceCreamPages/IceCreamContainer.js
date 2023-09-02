import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { buyIceCreamAction, addIceCreamAction } from '../../../redux/rootAction'


export class IceCreamContainer extends Component {


  // // ----------handler functions--------------------------------------------------
  handleBuyIceCream = (num) => {
    this.props.actions.buyIceCream(num)
  }

  handleAddIceCream = (num) => {
    this.props.actions.addIceCream(num)
  }

  render() {
    return (
      <div>
        <h2>Number of IceCreams = {this.props.numOfIceCreams} </h2>
        <button onClick={() => { this.handleBuyIceCream(1) }}>Buy 1 IceCream</button>
        <button onClick={() => { this.handleBuyIceCream(2) }}>Buy 2 IceCream</button>
        <button onClick={() => { this.handleAddIceCream(1) }} >Add 1 IceCream</button>
        <button onClick={() => { this.handleAddIceCream(2) }}>Add 2 IceCream</button>
      </div>
    )
  }
}


// // ----------redux store mapStateToProps & mapDispatchToProps --------------------
// // connect
// // 1st step of connect ==> how to subscribed () redux store by react app
// we can use selector (seperat selector file) to select state for bigger application but here we use directly
const mapStateToProps = state => {
  return {
    numOfIceCreams: state.reducerIceCream.numOfIceCreams
  }
}


// // coonect
// 2nd step of connect ==> how to dispacth action (creator) from react app
const mapDispatchToProps = dispatch => ({
  actions: {
    buyIceCream: bindActionCreators(buyIceCreamAction, dispatch),  // bindActionCreators(actionFunction, dispatch)
    addIceCream: bindActionCreators(addIceCreamAction, dispatch),
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
