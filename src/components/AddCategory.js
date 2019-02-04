import React, { useState } from 'react';

function AddCategory(props) {
  const [category, setCategory] = useState('')

  const handleChange = e => {
    setCategory(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!category) {
      alert('Please enter a category')
      return
    }
    props.onSubmit(category)
  }

  return (
    <div className="App">
      <form>
        <h1>Enter a category of bills</h1>
        <br/>
        <br/>
        <p>E.g. 'Electricity' or 'Gas' or 'Internet'</p>
        <br/>
        <input placeholder="Add category" value={category} onChange={handleChange} />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  )
}

export default AddCategory
