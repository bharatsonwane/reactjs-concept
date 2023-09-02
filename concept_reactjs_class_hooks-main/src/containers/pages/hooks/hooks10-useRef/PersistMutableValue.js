import { useState, useRef, useEffect } from "react";

function PersistMutableValue() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);


  /**
   *@description useEffect without dependency array runs after every render
   */
  useEffect(() => {
    count.current = count.current + 1;
    console.log('useEffectRun', count)
  });

  console.log('componentReturn', count)
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default PersistMutableValue