import React, { Component } from 'react';
import Todos from './Todos';
import Addtodo from './Addtodo';

class App extends Component {

  state = {
    todos: [
      { id: 1, content: '买菜' },
      { id: 2, content: '做饭' },
      { id: 3, content: '洗碗' },
    ]
  }

  handleDelete = (id) => {
    const todoLeft = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: todoLeft
    })
  }

  addTodo = (todo) => {
    // copy
    const todoNew = [...this.state.todos, todo];
    this.setState({
      todos: todoNew
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">任务列表</h1>
        <Todos todos={this.state.todos} handleDelete={this.handleDelete} />
        <Addtodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
