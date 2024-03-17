import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = (props) => {
    const navi = useNavigate();
    setTimeout(() => {
        navi("/");
    }, 2000);
    return (
        <div>
            <div className="container">
                <h3 className="center">Contact页面</h3>
                <p>Contact页面</p>
            </div>
        </div>
    )
}

export default Contact; 