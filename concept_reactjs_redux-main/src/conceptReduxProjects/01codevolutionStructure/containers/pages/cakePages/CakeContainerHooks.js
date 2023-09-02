// 2nd project
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCakeAction, addCakeAction } from '../../../redux/rootAction'


function CakeContainerHooks() {
    // // ----------redux store useDispatch & useSelector --------------------
    const dispatch = useDispatch()
    const reducerState = useSelector(
        (state) => (state)
    );
    let numOfCakes = reducerState.reducerCake.numOfCakes


    // // ----------handler functions--------------------------------------------------
    const handleBuyCake = (num) => {
        dispatch(buyCakeAction(num))
    }

    const handleAddCake = (num) => {
        dispatch(addCakeAction(num))
    }


    return (
        <div>
            <h2>Number of cakes = {numOfCakes} </h2>
            <button onClick={() => { handleBuyCake(1) }}>Buy 1 Cake</button>
            <button onClick={() => { handleBuyCake(2) }}>Buy 2 Cake</button>
            <button onClick={() => { handleAddCake(1) }} >Add 1 Cake</button>
            <button onClick={() => { handleAddCake(2) }}>Add 2 cake</button>
        </div>
    )
}

export default CakeContainerHooks
