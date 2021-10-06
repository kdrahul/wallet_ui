// Contains all the transaction details of a particular user

import axios from 'axios';
import { useEffect, useState } from 'react';

const TransactionLog = () => {
  const [item, setItem] = useState([]);
  const fetchData = async () => {
    const result = await axios
      .get('https://coinbasewallet.herokuapp.com/payment/all')
      .then((response) => {
        console.log(response);
        setItem(response.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <p className="display-6">Transaction Details</p>
      <table className="table table-hover table-borderless">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {item.map((items) => {
            return (
              <tr key={items._id}>
                <td>{items._id}</td>
                <td>{items.created_at}</td>
                <td>{items.data.name}</td>
                <td>{items.data.pricing.local.currency + ' ' + items.data.pricing.local.amount}</td>
                {items.type === 'charge:created' && (
                  <td className="text-primary">Created</td>
                )}
                {items.type === 'charge:confirmed' && (
                  <td className="text-success">Confirmed</td>
                )}
                {items.type === 'charge:failed' && (
                  <td className="text-danger">Failed</td>
                )}
                {items.type === 'charge:delayed' && (
                  <td className="text-warning">Delayed</td>
                )}
                {items.type === 'charge:pending' && (
                  <td className="text-warning">Pending</td>
                )}
                {items.type === 'charge:resolved' && (
                  <td className="text-warning">Resolved</td>
                )}
                <div className="py-2">
                <a className="btn btn-outline-primary" href={items.data.hosted_url}>Pay Now</a>
                </div>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionLog;
