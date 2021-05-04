import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import ForgetPassword from './components/ForgetPassPage';
import Main from './components/Main';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      {/* <ForgetPassword /> */}
      <CssBaseline />
      <Main />
    </div>
  );
}

export default App;
