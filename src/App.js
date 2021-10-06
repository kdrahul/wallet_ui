import { Switch, Route } from 'react-router-dom';
import Home from './templates/home';
import Login from './templates/login';
import Register from './templates/register';
import Store from './templates/store';
import Dashboard from './templates/dashboard';
import Checkout from './templates/checkout';
import Navbar from './components/navbar';
const App = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Store} />
      {/* <Route path="/store" exact component={Store} /> */}
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </div>
  );
};

export default App;
