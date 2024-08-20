import React, { useState, useContext, useEffect } from "react";
import TodosContext from "../context";

export default function TodoForm () {
    const [ todo, setTodo ] = useState("");
    const { state: { currentTodo = {} }, dispatch } = useContext(TodosContext);

    useEffect( () => {
        if(currentTodo.text) {
            setTodo(currentTodo.text);
        } else { 
            setTodo("");
        }
    }, [currentTodo.id]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if(currentTodo.text){
            dispatch( { type: "UPDATE_TODO", payload: todo });
        } else {
            dispatch({type: "ADD_TODO", payload: todo });
        }
    }
    return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            onChange={event => setTodo(event.target.value)}
            value={todo}
        />
    </form>
    );
};