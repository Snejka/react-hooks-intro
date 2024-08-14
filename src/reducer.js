const actionTodosToggle = (state, payload) => state.todos.map( todo => (todo.id === payload.id) ? {...payload, complete: !payload.complete } : todo );

export default function reducer(state, action) {
    switch (action.type){
        case "TOGGLE_TODO":
            const toggledTodos = actionTodosToggle(state, action.payload);
            return {
                ...state,
                todos: toggledTodos
            }
        default:
            return state;
    }
}