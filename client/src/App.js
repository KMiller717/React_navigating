import React, {useEffect, useState} from 'react';
import Games from './components/Games';
import Form from './components/Form';
import Edit from './components/Edit';
import { Router, Link } from '@reach/router';



function App() {


  return (
    <div className="App">
      <Link to='/'>All Games</Link> {" | "}
      <Link to='/new'>New Game</Link>

      <Router>
        <Games path='/' />
        <Form path='/new' />
        <Edit path='/edit/:id' />
      </Router>
      
    </div>
  );
}

export default App;
