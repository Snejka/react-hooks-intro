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
                    <button>Delete</button>
                    <button>Edit</button>
                </li>)
            )}
        </ul>
    </>
  )
}