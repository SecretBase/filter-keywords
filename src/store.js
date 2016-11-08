import { createStore, combineReducers } from 'redux'
import Immutable from 'immutable'

import data from '../comments.json'
import kdata from '../keywords.json'

const comments = (state = Immutable.fromJS({
  comments: data.comments,
  keywords: '',
  ratingFilter: ''
}), action) => {
  switch (action.type) {
    case 'UPDATE_KEYWORDS':
      return state.set('keywords', action.payload.keywords)
    case 'UPDATE_RATING_FILTER':
      return state.set('ratingFilter', action.payload.ratingFilter)
    default:
      return state
  }
}

// let content = data.comments.map(comment => comment.message).join(' ')
//
// console.log(content)

const keywords = (state = Immutable.fromJS(kdata), action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default createStore(combineReducers({
  comments,
  keywords
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
