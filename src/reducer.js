const actionTodosToggle = (state, payload) => state.todos.map( todo => (todo.id === payload.id) ? {...payload, complete: !payload.complete } : todo );
const actionRemoveTodos = (state, payload) => state.todos.filter( todo => (todo.id !== payload.id) );

export default function reducer(state, action) {
    switch (action.type) {

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