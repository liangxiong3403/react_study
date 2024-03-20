import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Post() {

    const { post_id } = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://jsonplaceholder.typicode.com/posts/" + post_id);
            setPost(response.data);
        };
        fetchData();
    }, [post_id]);

    return (
        (<div className="post card" key={post.id}>
            <div className="card-content">
                <span className="card-title red-text">{post.title}</span>
                <p>{post.body}</p>
            </div>
        </div>)

    )
}
