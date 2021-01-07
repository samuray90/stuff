import React from "react";
import "./App.css";

function Tweet({ name, message }) {
  return (
    <div className="tweet">
      <h3>{name}</h3>
      <p>{message}</p>
      <h3>Post</h3>
    </div>
  );
}

// remember to switch your branch to main always look for 'origin https://github.com/samuray90/"specific-project'

export default Tweet;
