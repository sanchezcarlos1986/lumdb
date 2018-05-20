import React, { Component } from 'react'

const BaseUrl = 'https://api.themoviedb.org/3'
const APIKey = 'api_key=bd0a7e9edaf44bb38b9df7f746364dac'
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1288'

class MovieDetail extends Component {

  state = {
    movie: {}
  }

  async componentDidMount() {
    const id = this.props.match.params.id
    const APIUrl = `${BaseUrl}/movie/${id}?${APIKey}`
    try {
      const res = await fetch(APIUrl)
      const movie = await res.json()
      this.setState({ 
        movie 
      })
    } catch (error) {
      console.log(`Lo siento, tuvimos un error al cargar las películas: ${error}`)
    }
  }

  render() {
    const { movie } = this.state
    console.log(movie)
 
    return (
      <div className="MovieDetail">
        <img src={`${BACKDROP_PATH}${movie.poster_path}`} alt={movie.title} title={movie.title} />
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} title={movie.title} />
        <h1>{movie.title}</h1>
        <h3>{movie.release_date}</h3>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetail