import React from 'react'
import Person from "./Person"
// // 1st example simple
// function NameList() {
//     const names = ['Bruce', 'Clark', 'Diana']
//     const nameList = names.map(name1 => <h2>{name1}</h2>)
//     return (
//         <div>
//             {nameList}
//         </div>
//     )
// }


// 2nd example complex
function NameList() {
    const person = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill : 'React'
        },
        {
            id: 1,
            name: 'Clark',
            age: 30,
            skill : 'Angular'
        },
        {
            id: 1,
            name: 'Diana',
            age: 30,
            skill : 'Vue'
        }
    ]
    const personList = person.map(person => <h2>I am {person.name}. I am {person.age} year old. & I know {person.skill}.</h2>)
    return (
        <div>
            {personList}
        </div>
    )
}


// // 3rd example complex ==> refactor jsx with seperate js component i.e. Person.js
// function NameList() {
//     const person = [
//         {
//             id: 1,
//             name: 'Bruce',
//             age: 30,
//             skill : 'React'
//         },
//         {
//             id: 2,
//             name: 'Clark',
//             age: 30,
//             skill : 'Angular'
//         },
//         {
//             id: 3,
//             name: 'Diana',
//             age: 30,
//             skill : 'Vue'
//         }
//     ]
//     const personList = person.map(person => (
//         <Person key={person.id} person={person} />))
//     return (
//         <div>
//             {personList}
//         </div>
//     )
// }


// // 4th example ==> should be avoid ==> Index as Key
// function NameList() {
//     const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
//     const nameList = names.map((name, index) => (
//         <h2 key={index}>{index} {name}</h2>))
//     return (
//         <div>
//             {nameList}
//         </div>
//     )
// }


export default NameList
