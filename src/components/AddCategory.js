import React from 'react';

function AddCategory() {
  return (
    <div className="App">
      <form>
        <h1>Enter a category of bills</h1>
        <br/>
        <br/>
        <p>E.g. 'Electricity' or 'Gas' or 'Internet'</p>
        <br/>
        <input placeholder="Add category" />
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddCategory
