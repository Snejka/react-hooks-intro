import { useState, useEffect } from "react";

function App() {
  const [ count, setCount ] = useState(0)
  const [ mousePosition, setMousePosition ] = useState({ x: null, y: null });
  //This sets useState to be a value that comes from external API in this case 'navigator'
  const [status, setStatus ] = useState(navigator.onLine);

  //Normaly Executed after every render
  useEffect(() => {
    //console.log("useEffect");
    document.title = `Current counter value is ${count}!`;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnliineStatus);
    window.addEventListener('offline', handleOfflineStatus);

    //This function cleans eventListener on component unmount
    //It is also called every time before the effect runs to cleanup last run
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('online', handleOnliineStatus);
      window.removeEventListener('offline', handleOfflineStatus);
    }
  }, 

  //Prevents useEffect to run on every render as adding an empty Array as second value of useEffect function
  //if this Array contain values (dependant), useEffect will rerun on every value change
  [ count ]);

  const changeCount = (increment = true) => {
    setCount(prevCount => {
      return( 
        increment ? prevCount + 1 : prevCount -1
      );
    });
  }

  const handleMouseMove = ( event ) => {
    setMousePosition({ x: event.pageX, y: event.pageY });
  };

  const handleOnliineStatus = () => setStatus(true);
  const handleOfflineStatus = () => setStatus(false);
 
  return (
    <>
      <p>The count is { count }</p>
      <button onClick={() => changeCount()}>+1</button>
      <button onClick={() => changeCount(false)}>-1</button>

      <hr />

      <p>Mouse Position: {JSON.stringify(mousePosition, null, 2)}</p>

      <hr />

      <p>Your curent status is <strong>{`${status ? "online" : "offline"}`}</strong></p>
    </>
  );
}

export default App;
