import React from "react";
import { UserContext } from "./index";

function App() {
  return (
    <div>
      <UserContext.Consumer>
          { value => <p> Hello, {value}!</p> }
      </UserContext.Consumer>
    </div>
  );
}

export default App;
