import React, { Component } from "react";

class AddContact extends Component {
    state = {
        name: null,
        age: null,
        sex: null,
    }
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addContact(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>name</label>
                    <input type="text" id="name" onChange={this.handleChange}></input>
                    <label htmlFor='age'>age</label>
                    <input type="text" id="age" onChange={this.handleChange}></input>
                    <label htmlFor='sex'>sex</label>
                    <input type="text" id="sex" onChange={this.handleChange}></input>
                    <button>提交表单</button>
                </form>
            </div>
        )
    }
}

export default AddContact;