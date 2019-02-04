import React from 'react';

function NavBar(props) {
  const catItems = () => {
    let items = '<li>No categories</li>'
    if (props.categories.length){
      items = props.categories.map((value, index) => {
        return <li key={index}>{value}</li>
      })
    }
    return items
  }

  return (
    <div className="App">
      <h1>Nav Bar</h1>
      <ul>
        {catItems()}
        <li>➕</li>
      </ul>
    </div>
  )
}

export default NavBar
