import React, { PureComponent, PropTypes } from 'react'

class CommentItem extends PureComponent {
  render () {
    return (
      <li className='comments__item'>
        Rate: {this.props.rating}
        <br />
        <p className='comments__message'>{this.props.message}</p>
      </li>
    )
  }
}

CommentItem.propTypes = {
  rating: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}

export default CommentItem
