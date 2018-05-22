import React, { Component } from 'react'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMovies } from './actions'
import PropTypes from 'prop-types'

import Movie from './Movie'

class MoviesList extends Component {
  componentDidMount() {
    const { getMovies, isLoaded } = this.props
    !isLoaded && getMovies()
  }

  render() {
    const { movies, isLoaded } = this.props
    if (!isLoaded) return(<h1>Loading...</h1>)

    return (
      <MovieGrid>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  isLoaded: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isLoaded: state.movies.moviesLoaded
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getMovies
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)

const MovieGrid = styled.section.attrs({ className: 'MoviesList'})`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(7, 1fr);
  grid-row-gap: 1rem;
`