import React, { useReducer } from "react";
import "./Counter.css"

const initialState = {
    count: 0,
};
const method = (state, action) => {
    switch (action.type) {
        case "plus":
            return { count: state.count + 1 }
        case "minus":
            return { count: state.count - 1 }
        case "reset":
            return { count: state.count = 0 }
        default:
            console.log("something Went Wrong");
    }
};
const Counter = () => {
    const [state, dispatch] = useReducer(method, initialState);
    return (
        <>
            <h1>Counter using object useReducer 🤨</h1>
            <br/>
            <br/>
            <br/>
            <button onClick={() => { dispatch({ type: "plus" }) }}>Click + 1</button>
            <span style={{ color: "red", border: "2px dashed black", padding: "2px", margin: "20px" }}> {state.count} </span>
            <button onClick={() => { dispatch({ type: "minus" }) }}>Click - 1</button>
            <br />
            <br />
            <button onClick={() => { dispatch({ type: "reset" }) }}>Reset 0</button>
        </>
    );
};
export default Counter;