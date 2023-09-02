import { useState, useRef, useCallback, useEffect } from 'react'

// // *******************************************************
// // useStateCallback
export const useStateCallback = (initialState) => {
  const [state, setState] = useState(initialState);
  const cbRef = useRef(null); // mutable ref to store current callback

  const setStateCallback = useCallback((state, cb) => {
    cbRef.current = cb; // store passed callback to ref
    setState(state);
  }, []);

  useEffect(() => {
    // cb.current is `null` on initial render, so we only execute cb on state *updates*
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null; // reset callback after execution
    }
  }, [state]);

  return [state, setStateCallback];
}



// // *********************************************************
// To get the previous props or state
export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}



// // *********************************************************
// // useDocumentTitle
export const useDocumentTitle = (count) => {
  useEffect(() => {
    document.title = `Count ${count}`
  }, [count])
}



// // *********************************************************
// // useCounter
export const useCounter = (initialCount = 0, value) => {
  const [count, setCount] = useState(initialCount)

  const increment = () => {
    setCount(prevCount => prevCount + value)
  }

  const decrement = () => {
    setCount(prevCount => prevCount - value)
  }

  const reset = () => {
    setCount(initialCount)
  }
  return [count, increment, decrement, reset]
}


// // *********************************************************
// // useInput
export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  const reset = () => {
    setValue('')
  }
  const bind = {
    value,
    onChange: e => {
      setValue(e.target.value)
    }
  }
  return [value, bind, reset]
}
