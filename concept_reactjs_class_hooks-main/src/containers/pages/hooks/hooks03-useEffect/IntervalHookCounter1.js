import React, {useState, useEffect} from 'react'

function IntervalHookCounter1() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1 )
    }


    // // componentDidMount
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            //  // cleanup ==> componentWillUnmount
            clearInterval(interval)
        }
    }, [])

    return (
        <React.Fragment>
            {count}
        </React.Fragment>
    )
}

export default IntervalHookCounter1
