import React, {useState, useEffect} from 'react'


/**
 * @description useEffect ==> conditionally run the effect ==> run effect when count change
 */
function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // // useEffect runs after every render of component
    // // for conditional render in useEffect's 2nd parameter i.e. in array specifiy props or state that we need to watch
    // //  below useEffect runs only if count parameter changes
    useEffect(() => {
        // useEffect with depedancy as nonempty array (with props or state) behave like as componentDidUpdate() in class base 
        console.log('useEffect - Updating Document title.')
        document.title = `you clicked ${count} times.`
    }, [count])
    

    return (
        <React.Fragment>
        <input type='text' value={name} onChange={e =>setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </React.Fragment>
    )
}

export default HookCounterOne
