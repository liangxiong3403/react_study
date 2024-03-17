import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navibar = (props) => {
    const navi = useNavigate();
    setTimeout(() => {
        navi("/about");
    }, 2000);
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="/" className="brand-logo">追风少年</a>
                <ul className="right">
                    <li><Link to="/ ">主页</Link></li>
                    {/* NavLink会在点击的时候新增class=active属性 */}
                    <li><NavLink to="/about">关于我们</NavLink></li>
                    <li><Link to="/contact">联系我们</Link></li>
                </ul>
            </div>
        </nav>
    );
}


export default Navibar;