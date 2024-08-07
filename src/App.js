import React, { useState, useEffect } from "react";

const initialLocationState = {
  latitude: null,
  longitude: null,
  speed: null
}

function App() {
  const [ count, setCount ] = useState(0)
  const [ mousePosition, setMousePosition ] = useState({ x: null, y: null });
  //This sets useState to be a value that comes from external API in this case 'navigator'
  const [status, setStatus ] = useState(navigator.onLine);
  //Using destructuring 
  const [ { latitude, longitude, speed }, setLocation] = useState(initialLocationState);
  let mounted = true;
  //Normaly Executed after every render
  useEffect(() => {
    //fixes a bug on refresh
    mounted = true;
    document.title = `Current counter value is ${count}!`;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnliineStatus);
    window.addEventListener('offline', handleOfflineStatus);
    //getCurrentPosition does not support an easy way for cleaning on unmount
    //To ensure that we know when the component is mounted we can set a variable let mounted;
    navigator.geolocation.getCurrentPosition(handleGeolocation);
    //Position watcher needs to have a watchID in order to clean it in component unmount
    const watchID = navigator.geolocation.watchPosition(handleGeolocation);

    //This function cleans eventListener on component unmount
    //It is also called every time before the effect runs to cleanup last run
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('online', handleOnliineStatus);
      window.removeEventListener('offline', handleOfflineStatus);
      navigator.geolocation.clearWatch(watchID);
      mounted = false;
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

  const handleGeolocation = (event) => {
    console.log(event, mounted)
    mounted && setLocation({
      latitude: event.coords.latitude,
      longitude: event.coords.longitude,
      speed: event.coords.speed
    })
  }
  
  return (
    <>
      <p>The count is { count }</p>
      <button onClick={() => changeCount()}>+1</button>
      <button onClick={() => changeCount(false)}>-1</button>

      <hr />

      <p>Mouse Position: {JSON.stringify(mousePosition, null, 2)}</p>

      <hr />

      <p>Your curent status is <strong>{`${status ? "online" : "offline"}`}</strong></p>

      <hr />

      <p>Latitude is { latitude }</p>
      <p>Longitude is { longitude }</p>
      <p>Current speed is { speed ? speed : "0" }</p>
    </>
  );
}

export default App;
