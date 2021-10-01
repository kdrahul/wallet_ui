const Login = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="insert.php" method="post">
                <div className="mb-3">
                  <p className="form-label"> User ID</p>{' '}
                  <input type="text" className="form-control" name="email" />
                </div>
                <div className="mb-3">
                  <p className="form-label"> Pin</p>{' '}
                  <input type="text" className="form-control" name="pw" />
                </div>

                <center>
                  <button
                    className="btn btn-outline-primary"
                    type="submit"
                  >
                    Login
                  </button>
                  <button
                    className="btn btn-outline-primary"
                    type="submit"
                  >
                    Register
                  </button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
