import React from 'react';
import Moment from 'react-moment'

function BillsTable(props) {
  const triggerShowAddBill = () => {
    props.showAddBill()
  }

  const removeBill = index => {
    props.removeBill(index)
  }

  return (
    <table className="table">
      <thead className="bg-blue text-white">
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="4">
          <button className="underline" onClick={triggerShowAddBill}>Add New Bill</button>
          </td>
        </tr>
        {props.bills.map((bill, index) => {
          return (
            <tr className="p4" key={index}>
              <td><Moment format="MMM D YYYY">{bill.date}</Moment></td>
              <td>${bill.amount}</td>
              <td>{bill.category}</td>
              <td>
                <button onClick={() => removeBill(index)}>𝗫</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default BillsTable
