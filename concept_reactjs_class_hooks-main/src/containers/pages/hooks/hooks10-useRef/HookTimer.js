import React, { useState, useEffect, useRef } from 'react'

function HookTimer() {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef()
  useEffect(() => {
    // // 1st==> Effect statement work as componentDidMount() in class based
    intervalRef.current = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
    // // 2nd==> return cleanup statement work as componentWillUnmount() in class based
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])


  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer Hooks</button>
    </div>
  )
}

export default HookTimer
