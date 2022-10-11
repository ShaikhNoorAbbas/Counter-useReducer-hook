import React, { useReducer, useEffect } from "react";
import "./Counter.css"

const initialState = {
    count: 0,
};
const method = (state, action) => {
    switch (action.type) {
        case "plus":
            return { count: state.count + action.value }
        case "minus":
            return { count: state.count - action.value }
        case "reset":
            return { count: state.count = 0 }
        default:
            console.log("something Went Wrong");
    }
};
const Counter = () => {
    const [state, dispatch] = useReducer(method, initialState);
    useEffect(() => {
        console.log("Rendered !!");
        document.title = `Counter Value ${state.count}`
    }, [state]);
    return (
        <>
            <h1>Counter using object useReducer 🤨</h1>
            <br />
            <br />
            <br />
            <button onClick={() => { dispatch({ type: "plus", value: 1 }) }}>Click + 1</button>
            <button onClick={() => { dispatch({ type: "plus", value: 5 }) }}>Click + 5</button>
            <span style={{ color: "red", border: "2px dashed black", padding: "2px", margin: "20px" }}> {state.count} </span>
            <button onClick={() => { dispatch({ type: "minus", value: 1 }) }}>Click - 1</button>
            <button onClick={() => { dispatch({ type: "minus", value: 5 }) }}>Click - 5</button>
            <br />
            <br />
            <button onClick={() => { dispatch({ type: "reset" }) }}>Reset to 0</button>
        </>
    );
};
export default Counter;