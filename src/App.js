import React, { useState, useEffect } from 'react';
import AddCategory from './components/AddCategory.js'
import AddBill from './components/AddBill.js'
import NavBar from './components/NavBar.js'
import Chart from './components/Chart.js'
import BillsTable from './components/BillsTable.js'
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState()
  const [categories, setCategories] = useState([])
  const [bills, setBills] = useState([])

  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(false)
  const [shouldShowAddBill, setShouldShowAddBill] = useState(false)

  const activeBills = () => {
    return bills
      .filter(bill =>
        activeCategory ? bill.category === activeCategory : true
      )
      .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
  }

  const addCategory = category => {
    if( categories.indexOf(category) !== -1 ){
      return
    }

    const updatedCategories = [...categories, category]
    setCategories(updatedCategories)
    setShouldShowAddCategory(false)

    localStorage.setItem('categories', JSON.stringify(updatedCategories))
  }

  const addBill = (amount, category, date) => {
    const bill = {amount, category, date}
    const updatedBills = [...(bills || []), bill]
    setBills(updatedBills)
    setShouldShowAddBill(false)
    localStorage.setItem('bills', JSON.stringify(updatedBills))
  }

  const removeBill = index => {
    const updatedBills = Array.from(bills)
    updatedBills.splice(index,1)
    setBills(updatedBills)
    localStorage.setItem('bills', JSON.stringify(updatedBills))
  }

  const showAddCategory = () => {
    setShouldShowAddCategory(true)
  }

  const showAddBill = () => {
    setShouldShowAddBill(true)
  }

  const closeAddBill = () => {
    setShouldShowAddBill(false)
  }

  useEffect(() => {
    const categoriesInLocalStorage = JSON.parse(
      localStorage.getItem('categories')
    ) || []

    if (categoriesInLocalStorage !== categories) {
      setCategories(categoriesInLocalStorage)
    }

    if (!categoriesInLocalStorage.length) {
      setShouldShowAddCategory(true)
    }

    const billsInLocalStorage = JSON.parse(localStorage.getItem('bills')) || []
    setBills(billsInLocalStorage)
  }, [])

  return (
    <div className="App">
    {shouldShowAddCategory ? (
          <AddCategory onSubmit={addCategory} />
        ) : shouldShowAddBill ? (
          <AddBill onSubmit={addBill} categories={categories} closeAddBill={closeAddBill} />
        ) : (
        <div>
          <NavBar
            categories={categories}
            showAddCategory={showAddCategory}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <div className="container flex">
            <div className="w-1/2">
              <BillsTable bills={activeBills()} showAddBill={showAddBill} removeBill={removeBill}/>
            </div>
            <div className="w-1/2">
              <Chart bills={activeBills()} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App
