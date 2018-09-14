import React from 'react';

const OrderItem = ({name, status, amount, date}) => {
    return (
        <tr>
                    <td>#52140300</td>
                    <td>
                        <img src="assets/images/users/user-2.jpg" alt="user-image" className="thumb-sm mr-2 rounded-circle" />
                        {name}
            </td>
                    <td><span className="badge badge-pill badge-success">{status}</span></td>
                    <td>
                        {amount}
            </td>
                    <td>
                        {date}
            </td>
                    <td>
                        <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                    </td>
                </tr>
    )
}

export default OrderItem;