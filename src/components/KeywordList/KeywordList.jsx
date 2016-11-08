import React, { PureComponent, PropTypes } from 'react'
import Immutable from 'immutable'
import './KeywordList.css'

class KeywordsList extends PureComponent {
  render () {
    return (
      <div className='keywords'>
        <table>
          <thead>
            <tr>
              <th>Term</th>
              <th>Occurrence</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.keywords.map((keyword, index) => {
                return (
                  <tr key={index}>
                    <td>{keyword.get(0)}</td>
                    <td className='text-center'>{keyword.get(1)}</td>
                  </tr>
                )
              }).toArray()
            }
          </tbody>
        </table>
      </div>
    )
  }
}

KeywordsList.propTypes = {
  keywords: PropTypes.instanceOf(Immutable.List).isRequired
}

export default KeywordsList
