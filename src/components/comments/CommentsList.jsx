import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import CommentItem from './CommentItem'
import Immutable from 'immutable'

import './CommentsList.css'

class CommentsList extends PureComponent {
  render () {
    return (
      <ul className='comments'>
        {this.props.comments.map((comment, index) => (
          <CommentItem key={index} rating={comment.get('rating')} message={comment.get('message')} />
        ))}
      </ul>
    )
  }
}

CommentsList.propTypes = {
  comments: PropTypes.instanceOf(Immutable.List).isRequired
}

const mapStateToProps = (state) => {
  let comments = state.comments.get('comments')
  let keywords = state.comments.get('keywords')
  let ratingFilter = state.comments.get('ratingFilter')
  if (keywords !== '') {
    comments = comments.filter(comment => comment.get('message').indexOf(keywords) > -1)
  }
  if (ratingFilter !== '') {
    comments = comments.filter(comment => comment.get('rating') === ratingFilter)
  }
  return {
    comments
  }
}

export default connect(mapStateToProps)(CommentsList)
