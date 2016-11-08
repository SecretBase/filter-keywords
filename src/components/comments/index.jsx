import React, { PureComponent } from 'react'
import CommentsList from './CommentsList'
import Filter from './Filter'

class CommentsListContainer extends PureComponent {
  render () {
    return (
      <div>
        <Filter />
        <CommentsList />
      </div>
    )
  }
}

export default CommentsListContainer
