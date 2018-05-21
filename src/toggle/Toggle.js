import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleMessage } from './actions'
// import { getMovies } from '../movies/actions'

const Toggle = ({ messageVisibility, toggleMessage, getMovies }) => (
  <div>
    {messageVisibility &&
      <p>loremfkjngs f</p>
    }
    <button onClick={toggleMessage}>Toggle</button>
    {/* <button onClick={getMovies}>Load Movies</button> */}
  </div>
)

Toggle.propTypes = {
  messageVisibility: PropTypes.bool.isRequired,
  toggleMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  messageVisibility: state.toggle.messageVisibility
})

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMessage
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Toggle)