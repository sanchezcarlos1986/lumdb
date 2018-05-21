import React, { Component } from 'react'
import Overdrive from 'react-overdrive'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMovie, resetMovie } from './actions'

import { Poster } from './Movie'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'

class MovieDetail extends Component {  
  componentDidMount() {
    const { getMovie, match } = this.props
    getMovie(match.params.id)
  }

  componentWillUnmount() {
    const { resetMovie } = this.props
    resetMovie()
  }

  render() {
    const { movie } = this.props
 
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={movie.id}>
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

const mapStateToProps = state => ({
  movie: state.movies.movie,
  isLoaded: state.movies.movieLoaded
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getMovie,
  resetMovie
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)

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