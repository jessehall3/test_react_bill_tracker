import React from 'react';

function NavBar(props) {
  const triggerShowAddCategory = () => {
    props.showAddCategory()
  }

  const liStyle = 'p-4 inline bg-grey-lighter hover:bg-grey-light uppercase font-black cursor-pointer'


  const catItems = () => {
    let items = '<li>No categories</li>'
    if (props.categories.length){
      items = props.categories.map((value, index) => {
        return <li className={liStyle} key={index}>{value}</li>
      })
    }
    return items
  }


  return (
    <div className="App">
      <ul className="list-reset inline flex justify-center border-b-4 mb-0">
        {catItems()}
        <li className={liStyle} onClick={triggerShowAddCategory}>➕</li>
      </ul>
    </div>
  )
}

export default NavBar
