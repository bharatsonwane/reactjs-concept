import React, { useContext } from 'react'
import { CountContext } from './AppH06';

function ComponentD() {
  const countContext = useContext(CountContext)
  return (
    <React.Fragment>
      Component D {countContext.countState}
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
      <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </React.Fragment>
  )
}

export default ComponentD