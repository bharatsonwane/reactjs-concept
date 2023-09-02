import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count + 1 )
    }


    // // componentDidMount
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            //  // cleanup ==> componentWillUnmount
            clearInterval(interval)
        }
    }, [count])

    return (
        <React.Fragment>
            {count}
        </React.Fragment>
    )
}

export default IntervalHookCounter
