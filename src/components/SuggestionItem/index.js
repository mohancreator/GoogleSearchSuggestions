import React from 'react'
import './index.css'

const SearchItems = ({suggestion, onClick}) => {
  return (
    <li className="containers">
      <p>{suggestion}</p>
      <button type="button" onClick={onClick} className="button">
        <img
          className="arrow-search"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SearchItems
