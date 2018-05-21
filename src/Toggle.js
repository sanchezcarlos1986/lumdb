import React from 'react'
import { connect } from 'react-redux'

const Toggle = ({ messageVisibility, dispatch }) => (
  <div>
    {messageVisibility &&
      <p>loremfkjngs f</p>
    }
    <button onClick={() => dispatch({
      type: 'TOGGLE_MESSAGE'
    })
    
    }>Toggle</button>
  </div>
)

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
})

// const mapDispatchToProps = dispatch => ({
//   type: 'TOGGLE_MESSAGE',
//   payload: !messageVisibility
// })

export default connect(mapStateToProps)(Toggle)