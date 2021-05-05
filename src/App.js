import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SignupPage from './container/SignupPage';
import LoginForm from './components/LoginForm';
import Forgot from './components/Forgot';
import LoginPage from './container/LoginPage';
import ChangePassword from './container/ChangePassword';
import Main from './container/Main';
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/forgot" component={Forgot} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;