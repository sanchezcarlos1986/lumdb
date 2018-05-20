import React, { Component } from 'react'
import Overdrive from 'react-overdrive'
import styled from 'styled-components'

import { Poster } from './Movie'

const BaseUrl = 'https://api.themoviedb.org/3'
const APIKey = 'api_key=bd0a7e9edaf44bb38b9df7f746364dac'
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'

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
    console.log('movie', movie)
 
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={movie.id.toString()}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} title={movie.title} />
          </Overdrive>	
          <div>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </ MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetail

const MovieWrapper = styled.article.attrs({ className: 'MovieDetail'})`
  background: url(${props => props.backdrop}) center center / cover no-repeat;
  padding-top: 50vh;
  position: relative;
`

const MovieInfo = styled.div.attrs({ className: 'MovieInfo' }) `
  background: white;
  display: flex;
  padding: 2rem 10%;
  text-align: left;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`