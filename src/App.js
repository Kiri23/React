import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';



var baseUrl = "https://mongodbnodejs-kaykphhvdl.now.sh";
var json = axios.get(baseUrl+ '/add')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


// La clase completa es un Componente
class App1 extends Component {

  // Aqui es que Pasa la Magia- Donde creo Mi Html
  render() {
    return (
      // todo estos son elementos
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

}

// le das export al Componente
export default App1;
