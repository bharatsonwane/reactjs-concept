import React, { useState } from 'react'

/**
 * @description state with object
 * @important spread operator 
 */
function HookCounterThree() {
    const [name, setName] = useState({ firstName: "", lastName: "" })


    const handleInputChange = (e) => {
        setName({ ...name, [e.target.name]: e.target.value })
    }

    return (
        <React.Fragment>
            <form>
                <input
                    type='text'
                    name='firstName'
                    value={name.firstName}
                    onChange={(e) => handleInputChange(e)}
                />
                <input
                    type='text'
                    name='lastName'
                    value={name.lastName}
                    onChange={(e) => handleInputChange(e)}
                />
                <h2> Your first name is - {name.firstName} </h2>
                <h2> Your last name is - {name.lastName} </h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </React.Fragment>
    )
}

export default HookCounterThree
