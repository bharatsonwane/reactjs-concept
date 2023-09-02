import React, { useState } from 'react'


/**
 * @description state with array
 * @important spread operator 
 */
function HookCounterFour() {

    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <React.Fragment>
            <button onClick={()=> addItem()}>Add a number</button>
            {/* <button onClick={addItem}>Add a number</button> */}
            <ul>
                {items.map((item, index) =>
                    <li key={item.id}>{item.value}</li>
                )}
            </ul>
        </React.Fragment>
    )
}

export default HookCounterFour
