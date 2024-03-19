const initState = {
    todos: [],
    posts: []
};

function rootReducer(state = initState, action) {
    if (action.type === "ADD_POST") {
        return {
            ...state,
            posts: [...state.posts, action.post]
        };
    } else if (action.type === "ADD_TODO") {
        return {
            ...state,
            todos: [...state.todos, action.todo]
        };
    }
}

export default rootReducer;