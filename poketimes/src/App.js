import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'
import Home from './Component/Home'
import Contact from './Component/Contact';
import About from './Component/About';
import Post from './Component/Post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <switch>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path="/:post_id" element={<Post/>} />
          </Routes>
          </switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
