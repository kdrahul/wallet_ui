const Register = () => {


  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Pin</label>
          <input type="password" className="form-control"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input type="text" className="form-control"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input type="text" className="form-control"/>
        </div>
      <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default Register;
