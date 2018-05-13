import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Movie from './Movie'

const movies = [
  {
    id: 1,
    title: 'Star Wars',
    desc:
      'Star Wars (conocida previamente en español como La guerra de las galaxias) es una serie de películas pertenecientes al género de la ópera espacial épica.'
  },
  {
    id: 2,
    title: 'Rambo'
  },
  {
    id: 3,
    title: 'Rocky'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map(movie => <Movie key={movie.id} movie={movie} desc={movie.desc} />)}
      </div>
    );
  }
}

export default App;
