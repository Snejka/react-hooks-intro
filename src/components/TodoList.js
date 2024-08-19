import React, { useContext } from "react";
import TodosContext from "../context";

export default function TodoList () {
  const { state, dispatch } = useContext(TodosContext);

  const title = (state.todos.length > 0) ? `${state.todos.length} Todos!` : "Nothing To Do!";

  return (
    <>
        <h1>{title}</h1>
        <ul>
            {state.todos.map( todo => (
                <li key={todo.id} 
                    onDoubleClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo })}
                    style={{ color: todo.complete ? 'yellow' : 'blue' }}
                >
                    {todo.text + " " +( todo.complete ? "Done!" : "")}

                    <button onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo })}>
                        Delete
                    </button>

                    <button onClick={ () => dispatch({ type: "EDDIT_TODO", payload: todo.id })}>Edit</button>
                </li>)
            )}
        </ul>
    </>
  )
}