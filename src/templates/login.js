import { useHistory } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const credentials = {
    user_id: '',
    password: '',
  };
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    setIsSubmitted(true);
    return history.push('/');
  };
  return (
    <div className="container">
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <p className="form-label"> User ID</p>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={(e) => (credentials.user_id = e.target.value)}
            />
          </div>
          <div className="mb-3">
            <p className="form-label"> Pin</p>
            <input
              type="text"
              className="form-control"
              name="password"
              onChange={(e) => (credentials.password = e.target.value)}
            />
          </div>

          <center>
            <button className="btn btn-outline-primary" type="submit">
              Login
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Login;
