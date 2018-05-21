import React, { Component } from 'react'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMovies } from './actions'

import Movie from './Movie'

class MoviesList extends Component {
  componentDidMount() {
    const { getMovies } = this.props
    getMovies()
  }

  render() {
    const { movies } = this.props
    return (
      <MovieGrid>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}


const mapStateToProps = state => ({
  movies: state.movies.movies
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