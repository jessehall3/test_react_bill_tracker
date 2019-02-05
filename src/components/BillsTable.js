import React from 'react';
import Moment from 'react-moment'

function BillsTable(props) {
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
        {props.bills.map((bill, index) => {
          return (
            <tr className="p4" key={index}>
              <td><Moment format="MMM D YYYY">{bill.date}</Moment></td>
              <td>${bill.amount}</td>
              <td>{bill.category}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default BillsTable
