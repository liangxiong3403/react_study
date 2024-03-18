import React, { Component } from "react";
import axios from "axios";

class Post extends Component {

    state = {
        id: 44
    }

    componentDidMount() {
        let id = 1;
        axios.get("http://jsonplaceholder.typicode.com/posts/" + id).then(res => {
            this.setState({
                posts: res.data
            })
        })
    }



    render() {
        return (
            <div className="container" >
                {/* <h4>{this.state.id}</h4> */}
                < h4 > 123</h4>
            </div >
        )
    }
}


export default Post;