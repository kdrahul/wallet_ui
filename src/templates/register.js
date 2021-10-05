import axios from 'axios';
import { useState } from 'react';

const Register = () => {
  const [registered, setRegistered] = useState(false);
  const userInfo = {
    email: '',
    username: '',
    pin: '',
    password: '',
    address: '',
    country: '',
  };
  const sendDetails = async () => {
    //
    // TODO: Fetch data from form and populate userInfo variable.
    //
    const url = 'https://coinbasewallet.heroku.com/user/register';
    const res = await axios
      .post(url, userInfo)
      .then(() => {
        console.log('Thank you for registering');
        setRegistered(true);
      })
      .catch((e) => {
        console.error(e);
      });
  };

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
          <input type="password" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Country</label>
          <input type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
