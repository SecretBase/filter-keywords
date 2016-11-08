import React, { Component } from 'react'
import './App.css'

import Comments from './components/comments'
import KeywordsList from './components/KeywordList'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Comments />
        <KeywordsList />
      </div>
    )
  }
}

export default App
