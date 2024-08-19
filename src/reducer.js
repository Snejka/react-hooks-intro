import { actionAddTodo, actionRemoveTodos, actionTodosToggle } from "./components/actions";

export default function reducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            const addTodo = actionAddTodo(state, action.payload);
            return{
                ...state,
                todos: [...state.todos, addTodo]
            }

        case "TOGGLE_TODO":
            const toggledTodos = actionTodosToggle(state, action.payload);
            return {
                ...state,
                todos: toggledTodos
            };

        case "REMOVE_TODO":
            const removeTodos = actionRemoveTodos(state, action.payload);
            return {
                ...state,
                todos: removeTodos
            };

        default:
            return state;
    }
}