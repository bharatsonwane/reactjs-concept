// // 1st project
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buyCakeAction, addCakeAction } from '../../../redux/rootAction'

console.log('CakeContainer==>after import')


export class CakeContainer extends Component {

    // // ----------handler functions--------------------------------------------------
    handleBuyCake = (num) => {
        // console.log(num)
        this.props.buyCake(num)
    }

    handleAddCake = (num) => {
        this.props.addCake(num)
    }
    render() {
        return (
            <div>
                <h2>Number of cakes = {this.props.numOfCakes} </h2>
                <button onClick={() => { this.handleBuyCake(1) }}>Buy 1 Cake</button>
                <button onClick={() => { this.handleBuyCake(2) }}>Buy 2 Cake</button>
                <button onClick={() => { this.handleAddCake(1) }} >Add 1 Cake</button>
                <button onClick={() => { this.handleAddCake(2) }}>Add 2 cake</button>
            </div>
        )
    }
}



// // ----------redux store mapStateToProps & mapDispatchToProps --------------------
// // connect
// // 1st step of connect ==> how to subscribed () redux store by react app
// we can use selector (seperat selector file) to select state for bigger application but here we use directly
// At any time if store is update then mapStateToProps will be called.
const mapStateToProps = state => {
    return {
        numOfCakes: state.reducerCake.numOfCakes
    }
}

// // connect
// 2nd step of connect ==> how to dispacth action (creator) from react app
// dispatch function is used to dispatch action to the store & that action forworded to reducer i.e. reducer called & taking response from reducer store will update.
const mapDispatchToProps = dispatch => {
    return {
        buyCake: (model) => dispatch(buyCakeAction(model)),
        addCake: (model) => dispatch(addCakeAction(model))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)


//------------------------------------------------------------------------------------------------------
// mapStateToProps and mapDispatchToProps deals with your Redux store’s state and dispatch, respectively.   
//-------------------------------------------------------------------------------------------------------
// Diffrent way to connect component with redux store
// A. By using connect function which provided by react-redux  
//     ==> connect(mapStateToProps, mapDispatchToProps)(Component)
//
//   a. mapStateToProps ==> 1st argument = state i.e. application state ==> 1st argument will get from redux automatically
//       > function name can be anything,
//       > At any time if store is update then mapStateToProps will be called.
//       > i.e. whenever "state" changes "props" value will be chages & if "prop's" value changes then our component will "re-render" (mapStateToProps will be called).
//       > we return object's of props
//
//   b. mapDispatchToProps ==> 1st argument = dispatch function ==> will get from redux automatically
//       > dispatch function is used to dispatch action to the store & that action forworded to reducer & taking response from reducer store will update.
//       > action object we get from action creators 
//       > we return object's of props
//         1. In "Application" file "store" imported & in "store" file "reducer" imported & in "reducer" file "action" imported. 
//         2. So "store" called the "reducer" to handle action therefore reducer run automatically after an action dispatched i.e. dispatched(action).
//         

// B. By using Hooks
//   a. useSelector Hook can be used to slect a part from state to use in component.
//   b. we can use useDispatch hook to dispatch action directly within the components.
