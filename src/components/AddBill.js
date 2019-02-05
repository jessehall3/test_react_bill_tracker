import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function AddBill(props) {
  const [category, setCategory] = useState(props.categories[0])
  const [date, setDate] = useState(new Date())

  const inputBillAmount = useRef(0);

  const handleChangeDate = newDate => {
    setDate(newDate)
  }

  const handleChangeCategory = e => {
    setCategory(e.target.value)
  }

  const isNum = function(rawNum) {
    const num = parseInt(rawNum)
    return typeof num == 'number' && !isNaN(num);
  }

  const handleSubmit = e => {
    e.preventDefault()
    const amount = inputBillAmount.current.value;
    if (!amount && amount !== 0) {
      alert('Please enter an amount')
      return
    } else if(!isNum(amount)){
      alert('Please enter a real number for the amount.')
    }
    props.onSubmit(amount, category || props.categories[0], date)
  }

  return (
    <div className="App">
      <form className="h-100 w-full flex items-center justify-center font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Enter a new Bill</h1>
          <div className="flex mt-4">
            <DatePicker selected={date} onChange={handleChangeDate} />
            <select onChange={handleChangeCategory}>
            {props.categories
              ? props.categories.map((value, index) => {
                  return (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  )
                })
              : ''}
            </select>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
            placeholder="Enter Bill Amount, eg $100.00"
            ref={inputBillAmount}
            />
            <button
              className="flex-no-shrink p-2 border-2 rounded bg-teal text-white border-teal hover:text-white hover:bg-teal"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
    </div>
  )
}

export default AddBill
