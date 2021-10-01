// Contains all the transaction details of a particular user

const TransactionLog = () => {
  const data = [
    {
      slno: '1',
      transaction_id: '4av6789f2933khj',
      datetime: '2020-11-15',
      from: 'Me',
      to: 'Someone',
      coin: 'ETH',
      amount: 'INR 400',
      note: '2 Tickets to Sunburn',
      status: 'Completed',
    },
    {
      slno: '2',
      transaction_id: '9yknu235867dgf',
      datetime: '2021-05-11',
      from: 'Me',
      to: 'Someone Else',
      coin: 'BTC',
      amount: 'INR 100',
      note: '5 Tickets to Cochela',
      status: 'Pending',
    },
    {
      slno: '3',
      transaction_id: '6gknh2369hsr',
      datetime: '2021-12-12',
      from: 'Someone',
      to: 'Me',
      coin: 'MON',
      amount: 'INR 500',
      note: '1 Ticket to Cochela',
      status: 'Completed',
    },
    {
      slno: '4',
      transaction_id: 'ln896sf1jk',
      datetime: '2019-12-12',
      from: 'Someone Else',
      to: 'Me',
      coin: 'BTC',
      amount: 'INR 2000',
      note: '5 Tickets to Sunburn',
      status: 'Declined',
    },
  ];

  return (
    <div>
      <p className="display-6">Transaction Details</p>
      <table className="table table-hover table-borderless">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Transaction ID</th>
            <th scope="col">Date</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Coin</th>
            <th scope="col">Amount</th>
            <th scope="col">Note</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((items) => {
            return (
              <tr>
                <td>{items.slno}</td>
                <td>{items.transaction_id}</td>
                <td>{items.datetime}</td>
                <td>{items.from}</td>
                <td>{items.to}</td>
                <td>{items.coin}</td>
                <td>{items.amount}</td>
                <td>{items.note}</td>
                {items.status === 'Completed' && (
                  <td className="text-success">{items.status}</td>
                )}
                {items.status === 'Declined' && (
                  <td className="text-danger">{items.status}</td>
                )}
                {items.status === 'Pending' && (
                  <td className="text-warning">{items.status}</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionLog;
