import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleMessage } from './actions'

const Toggle = ({ messageVisibility, toggleMessage }) => (
  <div>
    {messageVisibility &&
      <p>loremfkjngs f</p>
    }
    <button onClick={toggleMessage}>Toggle</button>
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
  toggleMessage: toggleMessage
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Toggle)