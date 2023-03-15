import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {useState} from 'react';
import axios from "axios";

import {Landing} from './Landing';
import {ShowPosts} from './ShowPosts';
import {AddPosts} from './AddPosts';

function App() {   
  const [getList, setList] = useState([]);
  if(getList.length <1) {axios.get('http://localhost:8080/data').then(response => setList(response.data))};

  return (
    <div className="App">
      <header className="App-header">  
        <div>
        <Router>
        <Link to="/showPosts">  <button> Show Posts </button> </Link>
        <Link to="/addPosts">  <button> Add Posts </button>   </Link>
         <Routes>
          <Route exact path='/' element={<Landing/>} />
          <Route path="/showPosts" element={<ShowPosts get = {getList}/>} />
          <Route path="/addPosts" element={ <AddPosts set = {setList} /> } />
          </Routes>
        </Router>
        </div>
      
      </header>

      </div>
  );
}

export default App;
