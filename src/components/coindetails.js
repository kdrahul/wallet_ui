const CoinDetails = () => {
  return <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              </ul>
             
          </div>
        </div>
      </nav>
      <div className="container">
          <br /><h3>Current prices</h3><br />
          <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <img src="bch.jpg.jpg" class="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Price of BCH:</h5>
                  <p className="card-text">
                    <button type="button" class="btn btn-outline-secondary" disabled>BCH</button>
                    <button type="button" class="btn btn-outline-secondary" disabled>1</button><br />
                    <button type="button" class="btn btn-outline-secondary" disabled>INR</button>
                    <button type="button" class="btn btn-outline-secondary" disabled>42789.28</button>
                    
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="btc.jpg.jpg" class="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Price of BTC:</h5>
                  <p className="card-text">
                    <button type="button" class="btn btn-outline-secondary" disabled>BTC</button>
                    <button type="button" class="btn btn-outline-secondary" disabled>1</button><br />
                    <button type="button" class="btn btn-outline-secondary" disabled>INR</button>
                    <button type="button" class="btn btn-outline-secondary" disabled>3851178.50</button>
                    
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="dai.jpg" class="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Price of DAI:</h5>
                  <p className="card-text">
                    <button type="button" class="btn btn-outline-secondary" disabled>DAI</button>
                    <button type="button" class="btn btn-outline-secondary" disabled>1</button><br />
                    <button type="button"  class="btn btn-outline-secondary" disabled>INR</button>
                    <button type="button" class="btn btn-outline-secondary" disabled>75.04</button>
                    
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
                <div className="card">
                  <img src="eth.jpg" class="card-img-top" alt="..."></img>
                  <div className="card-body">
                    <h5 className="card-title">Price of ETH:</h5>
                    <p className="card-text">
                        <button type="button" class="btn btn-outline-secondary" disabled>ETH</button>
                        <button type="button" class="btn btn-outline-secondary" disabled>1</button><br />
                        <button type="button"  class="btn btn-outline-secondary" disabled>INR</button>
                        <button type="button"  class="btn btn-outline-secondary" disabled>253797.57</button>
                        
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="ltc.jpg" class="card-img-top" alt="..."></img>
                  <div className="card-body">
                    <h5 className="card-title">Price of LTC:</h5>
                    <p className="card-text">
                        <button type="button" class="btn btn-outline-secondary" disabled>LTC</button>
                        <button type="button" class="btn btn-outline-secondary" disabled>1</button><br />
                        <button type="button"  class="btn btn-outline-secondary" disabled>INR</button>
                        <button type="button"  class="btn btn-outline-secondary" disabled>12586.30</button>
                        
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="dcg.jpg" class="card-img-top" alt="..."></img>
                  <div className="card-body">
                    <h5 className="card-title">Price of DOGE:</h5>
                    <p className="card-text">
                        <button type="button" class="btn btn-outline-secondary" disabled>DOGE</button>
                        <button type="button" class="btn btn-outline-secondary" disabled>1</button><br />
                        <button type="button"  class="btn btn-outline-secondary" disabled>INR</button>
                        <button type="button"  class="btn btn-outline-secondary" disabled>18.78</button>
                        
                    </p>
                  </div>
                </div>
              </div>
            <div className="col">
              <div className="card">
                <img src="usdc.jpg" class="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Price of USDC:</h5>
                  <p className="card-text">
                    <button type="button" class="btn btn-outline-secondary" disabled>USDC</button>
                    <button type="button" class="btn btn-outline-secondary" disabled>1</button><br />
                    <button type="button" class="btn btn-outline-secondary" disabled>INR</button>
                    <button type="button" class="btn btn-outline-secondary" disabled>75.02</button>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
          
      </div>
  </div>;
};

export default CoinDetails;
