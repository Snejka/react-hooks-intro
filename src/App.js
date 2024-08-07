import React, { useState } from "react";


export default function App() {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ user, setUser ] = useState({username: null, password: null, test: ""}); 

  const handleFormSubmit = ( event ) => {
    event.preventDefault();
    setUser({...user, ...{ username, password } });
    setUsername("");
    setPassword("");

  }
  return (
    <div style={{ textAlign: "center"}}>
      <h1>Login</h1>
      <form 
        style={{ display: "grid", alignItems:'center', justifyContent: 'center' }} 
        onSubmit={handleFormSubmit}
      >  
        <input 
          type="text" 
          value={username} 
          placeholder="Username" 
          onChange={(event) => setUsername(event.target.value)}
        />
        <input 
          type="password" 
          value={password} 
          placeholder="Password" 
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {user.username && <section>
        <hr />
        <p>Name submited: {user.username}!</p>
      </section>
      }
    </div>
  );
}

