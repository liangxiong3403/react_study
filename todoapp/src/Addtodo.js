import React, { Component } from 'react';

class Addtodo extends Component {

    state = {
        id: '',
        content: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state);

        // 重置输入框
        this.setState({
            id: '',
            content: '',
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label >id</label>
                    <input id="id" type="text" onChange={this.handleChange} value={this.state.id} />
                    <label >内容</label>
                    <input id="content" type="text" onChange={this.handleChange} value={this.state.content} />
                    <button>提交待办事项</button>
                </form>
            </div>
        )
    }
}

export default Addtodo;