import React from 'react';

const TransactionItem = ({ name, status, amount, date }) => {
  return (
    <tr>
      <td>
        <img src="assets/images/users/user-2.jpg" alt="user-image" className="thumb-sm rounded-circle mr-2" />
        {name}
      </td>
      <td><i className="mdi mdi-checkbox-blank-circle text-success"></i>{status}</td>
      <td>
        {amount}
        <p className="m-0 text-muted font-14">amount</p>
      </td>
      <td>
        {date}
        <p className="m-0 text-muted font-14">date</p>
      </td>
      <td>
        <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
      </td>
    </tr>
  )
}

export default TransactionItem;