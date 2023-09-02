import React, { useState, useEffect } from 'react'

/**
 * @description1 run effect only once 
 * @description1 effect with cleanup (using return in useEffect)
 */
function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }


    useEffect(() => {
        // useEffect with depedancy as empty array behave like as componentDidMount() in class base 
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
        return () => {
            // cleanup code in return
            console.log('Component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <React.Fragment>
            Hooks X - {x}; Y - {y}
        </React.Fragment>
    )
}

export default HookMouse
