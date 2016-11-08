import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

class Filter extends PureComponent {
  constructor (props) {
    super(props)
    this.onInputChange = this.onInputChange.bind(this)
    this.onRatingChange = this.onRatingChange.bind(this)
  }

  onInputChange (event) {
    this.props.dispatch({
      type: 'UPDATE_KEYWORDS',
      payload: {
        keywords: event.target.value
      }
    })
  }

  onRatingChange (event) {
    this.props.dispatch({
      type: 'UPDATE_RATING_FILTER',
      payload: {
        ratingFilter: event.target.value
      }
    })
  }

  render () {
    return (
      <div>
        <input type='text' placeholder='Search' onChange={this.onInputChange} />
        <small>&nbsp;Rating:</small>
        <select name='rating' id='rating' onChange={this.onRatingChange}>
          <option value=''>All</option>
          {
            this.props.comments.map((commets, rating) => (
              <option key={rating} value={rating}>{rating} ({commets.size})</option>
            )).toArray()
          }
        </select>
      </div>
    )
  }
}

Filter.propTypes = {
  comments: PropTypes.instanceOf(Immutable.OrderedMap),
  dispatch: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments.get('comments').groupBy((comment) => comment.get('rating'))
  }
}

export default connect(mapStateToProps)(Filter)
