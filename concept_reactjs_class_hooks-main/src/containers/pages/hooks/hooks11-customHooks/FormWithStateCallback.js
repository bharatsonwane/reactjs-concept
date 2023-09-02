import React from 'react'
import {useStateCallback} from './customHooks/customHooks'

function FormWithStateCallback() {
  const [state, setState] = useStateCallback({
    title: ""
  }); // same API as useState + setState with class base

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value },
      // 2nd argument is callback function , `state` is *updated* state
      state => console.log("I am called after setState, state:", state)
    );
  };

  return (
    <React.Fragment>
        <input
          type="text"
          name="title"
          value={state.title}
          onChange={e => handleChange(e)}
          className="text-field"
          placeholder="Enter Task Title." />
    </React.Fragment>
  )
}

export default FormWithStateCallback