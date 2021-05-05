import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import ForgetPassForm from './components/ForgetPassForm'
import ForgetPassword from './components/ForgetPassword';
import Main from './components/Main';
import { CssBaseline } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/forget" component={ForgetPassword} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
