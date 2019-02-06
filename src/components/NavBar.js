import React from 'react';

function NavBar(props) {
  const triggerShowAddCategory = () => {
    props.showAddCategory()
  }

  const setNewActiveCategory = index => {
    props.setActiveCategory(props.categories[index])
  }

  const isActive = index => {
    return props.activeCategory === props.categories[index]
  }
  const liStyle = 'p-4 inline hover:bg-grey-light uppercase font-black cursor-pointer'

  const makeItem = (value, index) => {
    const activeClass = isActive(index) ? ' bg-grey-dark' : ' bg-grey-lighter'
    return <li className={liStyle + activeClass}
      onClick={() => setNewActiveCategory(index)}
      key={index}>
        {value}
      </li>
  }

  const catItems = () => {
    let items = '<li>No categories</li>'
    if (props.categories.length){
      items = props.categories.map((value, index) => {
        const activeClass = isActive(index) ? ' bg-grey-dark' : ' bg-grey-lighter'
        return <li className={liStyle + activeClass}
          onClick={() => setNewActiveCategory(index)}
          key={index}>
            {value}
          </li>
      })
      const all = <li
        className={
          liStyle +
          (props.activeCategory === '' || props.activeCategory === undefined
            ? ' bg-grey-dark'
            : ' bg-grey-lighter')
        }
        onClick={() => setNewActiveCategory('')}
        >
          All
        </li>
        items.unshift(all)
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
