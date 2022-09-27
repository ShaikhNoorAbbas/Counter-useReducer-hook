import React, { useReducer } from "react";

import "./App.css";
import Counter from "./Components/Counter";
const App = () => {
  const [state, dispatch] = useReducer(method, 0);
  return (
    <React.Fragment>
      <h1> Counter Using useReducer Hook 🙂</h1>
      <br />
      <br />
      <br />
      <button onClick={() => { dispatch({ type: "plus" }) }}>Click + 1</button>
      <span style={{ color: "red", border: "2px dashed black", padding: "2px", margin: "10px" }}> {state} </span>
      <button onClick={() => { dispatch({ type: "minus" }) }}>Click - 1</button>
      <br />
      <br />
      <button onClick={() => { dispatch({ type: "reset" }) }}> Reset to 0 </button>
      <Counter />
    </React.Fragment>
  );
};
const method = (state, action) => {
  switch (action.type) {
    case "plus":
      return state + 2;
    case "minus":
      return state - 2;
    case "reset":
      return state = 0;
    default:
      console.log("Something is Wrong");
  }
};
export default App;