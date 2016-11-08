import { connect } from 'react-redux'
import KeywordList from './KeywordList'

const mapStateToProps = (state) => {
  return {
    keywords: state.keywords.get('keywords')
  }
}

export default connect(mapStateToProps)(KeywordList)
