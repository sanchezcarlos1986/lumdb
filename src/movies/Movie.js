import React from 'react'
import { Link } from 'react-router-dom'
import Overdrive from 'react-overdrive'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'

const Movie = ({movie}) => (
	<div className="Movie">
		<Link to={`/${movie.id}`}>
			<Overdrive id={movie.id.toString()}>
				<Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} title={movie.title} />
			</Overdrive>	
		</Link>
	</div>
)

export default Movie

Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired
	})
}

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`