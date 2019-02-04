import React from 'react';

function NavBar(props) {
  return (
    <div className="App">
      <h1>Nav Bar</h1>
      <ul>
      {props.categories
        ? props.categories.map((value, index) => {
          return <li key={index}>{value}</li>
        })
        : '<li>No categories</li>'}
      </ul>
    </div>
  )
}

export default NavBar
