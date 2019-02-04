import React, { useState, useEffect } from 'react';
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
    if( categories.indexOf(category) !== -1 ){
      return
    }

    const updatedCategories = [...categories, category]
    setCategories(updatedCategories)
    setShouldShowAddCategory(false)

    localStorage.setItem('categories', JSON.stringify(updatedCategories))
  }

  useEffect(() => {
    let categoriesInLocalStorage = JSON.parse(
      localStorage.getItem('categories')
    )

    if (!Array.isArray(categoriesInLocalStorage)){
      categoriesInLocalStorage = []
    }

    if (categoriesInLocalStorage !== categories) {
      setCategories(categoriesInLocalStorage)
    }

    if (!categoriesInLocalStorage) {
      setShouldShowAddCategory(true)
    }
  }, [])

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
