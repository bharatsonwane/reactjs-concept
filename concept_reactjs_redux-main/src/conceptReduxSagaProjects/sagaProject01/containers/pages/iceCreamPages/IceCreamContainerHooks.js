import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCreamAction, addIceCreamAction } from '../../../Redux-action'


function IceCreamContainerHooks() {
    // // ----------redux store useDispatch & useSelector --------------------
    const dispatch = useDispatch()
    const reducerState = useSelector(
        (state) => (state)
    );
    let numOfIceCreams = reducerState.reducerIceCream.numOfIceCreams

    // // ----------handler functions--------------------------------------------------
    const handleBuyIceCream = (num) => {
        dispatch(buyIceCreamAction(num))
    }

    const handleAddIceCream = (num) => {
        dispatch(addIceCreamAction(num))
    }
    return (
        <div>
            <h2>Number of IceCreams = {numOfIceCreams} </h2>
            <button onClick={() => { handleBuyIceCream(1) }}>Buy 1 IceCream</button>
            <button onClick={() => { handleBuyIceCream(2) }}>Buy 2 IceCream</button>
            <button onClick={() => { handleAddIceCream(1) }} >Add 1 IceCream (async action)</button>
            <button onClick={() => { handleAddIceCream(2) }}>Add 2 IceCream (async action)</button>
        </div>
    )
}


export default IceCreamContainerHooks
