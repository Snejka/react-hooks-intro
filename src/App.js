import { useState } from "react";

function App() {
  const [ count, setCount ] = useState(0)

  const changeCount = (increment = true) => {
    setCount(prevCount => {
      return( 
        increment ? prevCount + 1 : prevCount -1
      );
    });
  }
  return (
    <>
      <p>The count is { count }</p>
      <button onClick={() => changeCount()}>+1</button>
      <button onClick={() => changeCount(false)}>-1</button>
    </>
  );
}

export default App;
