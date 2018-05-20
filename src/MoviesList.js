import React, { Component } from 'react'
import Movie from './Movie'

const BaseUrl = 'https://api.themoviedb.org/3'
const APIKey = 'api_key=bd0a7e9edaf44bb38b9df7f746364dac'
const APIUrl = `${BaseUrl}/discover/movie?sort_by=popularity.desc&${APIKey}`

class MoviesList extends Component {

  state = {
    movies: []
  }

  async componentDidMount() {
    try {
      const res = await fetch(APIUrl)
      const movies = await res.json()
      this.setState({
        movies: movies.results
      })
    } catch (error) {
      console.log(`Lo siento, tuvimos un error al cargar las películas: ${error}`)
    }
  }

  render() {
    const { movies } = this.state
    return (
      <div className="MoviesList">
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default MoviesList