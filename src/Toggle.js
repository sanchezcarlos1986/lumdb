import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleMessage, getMovies } from './actions'

const Toggle = ({ messageVisibility, toggleMessage, getMovies }) => (
  <div>
    {messageVisibility &&
      <p>loremfkjngs f</p>
    }
    <button onClick={toggleMessage}>Toggle</button>
    <button onClick={getMovies}>Load Movies</button>
  </div>
)

Toggle.propTypes = {
  messageVisibility: PropTypes.bool.isRequired,
  toggleMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
})

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMessage,
  getMovies
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Toggle)