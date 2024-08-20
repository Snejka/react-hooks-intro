import { actionAddTodo, actionRemoveTodos, actionTodosToggle, actionUpdateTodos } from "./components/actions";

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
            const isRemovedTodo = (state.currentTodo.id === action.payload.id) ? {} : state.currentTodo;
            const removeTodos = actionRemoveTodos(state, action.payload);
            return {
                ...state,
                todos: removeTodos,
                currentTodo: isRemovedTodo
            };

        case "EDDIT_TODO":
            return {
                ...state,
                currentTodo: action.payload
            };

        case "UPDATE_TODO":
            const updatedTodos = actionUpdateTodos(state, action.payload);
            return {
                ...state,
                todos: updatedTodos,
                currentTodo: {},
            }

        default:
            return state;
    }
}