import { useHistory } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
  const [uname, setUname] = useState('');
  const [pass, setPass] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
    const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(uname);
    console.log(pass);
      setIsSubmitted(true);
      if(isSubmitted) {
        return history.push('/');
      }
  };
  return (
    <div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <p className="form-label"> User ID</p>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={(e) => setUname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <p className="form-label"> Pin</p>
            <input
              type="text"
              className="form-control"
              name="password"
              onChange={(e) => setPass(e.target.value)}
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
