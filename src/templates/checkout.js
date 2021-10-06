const Checkout = ({ location }) => {
  console.log(location.state.data[0]);
  const data = location.state.data[0];
  return (
    <div className="container">
      <span className="display-6 py-3">Checkout Details</span>
      <table className="table table-borderless">
        <tr >
          <th>Name : </th>
      <div className="py-2">
          <td>{data.name}</td>
      </div>
        </tr>
        <tr>
          <th>Description : </th>
      <div className="py-2">
          <td>{data.description}</td>
      </div>
        </tr>
        <tr>
          <th>Code : </th>
      <div className="py-2">
          <td>{data.code}</td>
      </div>
        </tr>
        <tr>
          <th scope="row">Transaction ID : </th>
      <div className="py-2">
          <td >{data.id}</td>
      </div>
        </tr>
        <tr>
          <th scope="row">Expires At :</th>
      <div className="py-2">
          <td >{data.expires_at}</td>
      </div>
        </tr>
        <tr>
          <th scope="row">Initiated By :</th>
      <div className="py-2">
          <td >{data.metadata.user}</td>
      </div>
        </tr>
        <tr>
          <th scope="row">Cost in Etherium</th>
      <div className="py-2">
          <td >{data.pricing.ethereum.amount}</td>
      </div>
        </tr>
        <tr>
          <th scope="row">Cost in INR</th>
      <div className="py-2">
          <td >{data.pricing.local.amount}</td>
      </div>
        </tr>
        <tr>
          <td></td>
      <div className="py-2">
          <td>
            <a className="btn btn-outline-primary" href={data.hosted_url}>
              Proceed to pay
            </a>
          </td>
      </div>
        </tr>
      </table>
    </div>
  );
};

export default Checkout;
