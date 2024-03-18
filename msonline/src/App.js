import React, { Component } from 'react';
import Navibar from './component/Navibar.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './component/Home.js';
import About from './component/About.js';
import Contact from './component/Contact.js';
import Post from './component/Post.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" >
          <Navibar />
          {/* 配置路由规则 */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/:post_id' element={<Post/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
