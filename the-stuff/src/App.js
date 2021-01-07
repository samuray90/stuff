import React, { useState } from "react";
import Tweet from "./Tweet";

function App() {
  const [users, setUsers] = useState([
    { name: "edd", message: "hello" },
    { name: "jp", message: "guilty" },
    { name: "travolat", message: "notguilty" },
  ]);

  return (
    <div className="app">
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

// the  name here is containing a string with names dev edd johnn etc
// and is pushed to tweet.js like this
// function Tweet(props) {
// return (
//  <div className="tweet">
//*    <h3>{props.name}</h3> //*/
//    <p>Random tweet</p>
//     <h3>Number of hates</h3>
//</div>
// );
//}

export default App;
