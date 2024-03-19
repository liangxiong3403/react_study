import React, { Component } from "react";
import axios from 'axios';
import { connect } from "react-redux";

class Home extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get("http://jsonplaceholder.typicode.com/posts").then(res => {
            this.setState({
                posts: res.data
            })
        })
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length > 0 ? (posts.map(post => {
            return (
                <div className="post card" key={post.id}>
                    <div className="card-content">
                        <span className="card-title red-text">{post.title}</span>
                        <p>{post.body}</p>
                    </div>
                </div>
            )
        })) : (
            <div>没有数据展示</div>
        )

        return (
            <div>
                <div className="container">
                    <h3 className="center">Home页面</h3>
                    <div>{postList}</div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        posts: state.posts,
    }
}

export default Home;