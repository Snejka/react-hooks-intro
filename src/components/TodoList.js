import React, { useContext } from "react";
import TodosContext from "../context";

export default function TodoList () {
  const { state, dispatch } = useContext(TodosContext);

  return (
    <ul>
        {state.todos.map( todo => (
            <li key={todo.id}>
                {todo.text}
            </li>)
        )}
    </ul>
  )
}