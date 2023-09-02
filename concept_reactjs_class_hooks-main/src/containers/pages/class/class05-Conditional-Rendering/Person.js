import React from 'react'


// // 3rd example complex ==> refactor jsx with seperate js component
function Person({person}) {
    return (
        <div>
            <h2>I am {person.name}. I am {person.age} year old. & I know {person.skill}.</h2>
        </div>
    )
}

export default Person
