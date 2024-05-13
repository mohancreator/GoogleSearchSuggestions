// GoogleSuggestions.js
import React, {Component} from 'react'
import './index.css'
import SearchItems from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: 'Search on Google',
    filteredSuggestions: this.props.suggestionsList,
  }

  onChangeSearchInput = event => {
    const {suggestionsList} = this.props
    const {value} = event.target
    const filteredSuggestions = suggestionsList.filter(suggestion =>
      suggestion.suggestion.toLowerCase().includes(value.toLowerCase()),
    )
    this.setState({
      searchInput: value,
      filteredSuggestions,
    })
  }

  handleSuggestionClick = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {searchInput, filteredSuggestions} = this.state
    return (
      <div className="container">
        <div>
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="searchContainer">
            <img
              className="arrow-search"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              onChange={this.onChangeSearchInput}
              value={searchInput}
              type="search"
            />
          </div>
          <ul className="searchListContainer">
            {filteredSuggestions.map(eachItem => (
              <SearchItems
                key={eachItem.id}
                suggestion={eachItem.suggestion}
                onClick={() => this.handleSuggestionClick(eachItem.suggestion)}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
