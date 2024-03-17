import React from 'react';

const Todos = (props) => {
    const { todos, handleDelete } = props;
    console.log(todos);
    const todoList = todos.length > 0 ? (todos.map(todo => {
        return <div className="collection-item" key={todo.id}>
            <span onClick={() => handleDelete(todo.id)}>{todo.content}</span>
        </div>
    })) : (<p className="center">没有任务需要执行</p>);
    return (
        <div className="todos collection">
            {todoList}
        </div>
    );
}


export default Todos;