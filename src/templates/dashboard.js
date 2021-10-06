import MarketOverview from '../components/marketoverview';
import TransactionLog from '../components/transaction_log';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div class="d-flex align-items-start">
        <div
          class="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            class="nav-link active"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#overview"
            type="button"
            role="tab"
            aria-controls="overview"
            aria-selected="true"
          >
            Overview
          </button>
      {/*<button
            class="nav-link"
            id="wallet_tab"
            data-bs-toggle="pill"
            data-bs-target="#wallet"
            type="button"
            role="tab"
            aria-controls="wallet"
            aria-selected="false"
          >
            Wallet
          </button> */}
          <button
            class="nav-link"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#transactions"
            type="button"
            role="tab"
            aria-controls="transactions"
            aria-selected="false"
          >
            Transactions
          </button>
          <button
            class="nav-link"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#coin_details"
            type="button"
            role="tab"
            aria-controls="coin_details"
            aria-selected="false"
          >
            Coin Details
          </button>
          <button
            class="nav-link"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Profile
          </button>
        </div>

        {/* Contents for respective tabs */}
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="overview"
            role="tabpanel"
            aria-labelledby="overview"
          >
            <MarketOverview />
          </div>
          <div
            class="tab-pane fade"
            id="transactions"
            role="tabpanel"
            aria-labelledby="transactions"
          >
            <TransactionLog />
          </div>
          <div
            class="tab-pane fade"
            id="wallet"
            role="tabpanel"
            aria-labelledby="wallet"
          >
            ...
          </div>
          <div
            class="tab-pane fade"
            id="coin_details"
            role="tabpanel"
            aria-labelledby="coin_details"
          >
            ...
          </div>
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
