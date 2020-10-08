import React from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import CreatePost from './components/CreatePost';
import ChooseFile from './components/ChooseFile';
import Post from './components/Post';
import Comments from './components/Comments';
import Filter from './components/Filter'


class App extends React.Component{ 

  render(){
    
  return (
   
    <div>
    <Navbar />
    <CreatePost />
    
    <Filter/>

    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
   
    
    
    </div>
  );
}}

export default App;
