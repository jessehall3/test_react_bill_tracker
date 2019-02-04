import React, { useState } from 'react';
import AddCategory from './components/AddCategory.js'
import AddBill from './components/AddBill.js'
import NavBar from './components/NavBar.js'
import Chart from './components/Chart.js'
import BillsTable from './components/BillsTable.js'
import './App.css';

function App() {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(true)
  const [categories, setCategories] = useState([])

  const addCategory = category => {
    if( categories.indexOf(category) === -1){
      setCategories([...categories, category])
    }
      setShouldShowAddCategory(false)
  }

  return (
    <div className="App">
      {shouldShowAddCategory ? (
        <AddCategory onSubmit={addCategory} />
      ) : (
        <div>
          <NavBar />
          <div className="container flex">
            <div className="w-1/2">
              <BillsTable />
            </div>
            <div className="w-1/2">
              <Chart />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App
