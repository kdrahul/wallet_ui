import { Switch, Route } from 'react-router-dom';
import Home from './templates/home';
import Login from './templates/login';
import Register from './templates/register';
import Store from './templates/store';
import Dashboard from './templates/dashboard';
import Navbar from './components/navbar';
const App = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/store" exact component={Store} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </div>
  );
};

export default App;
