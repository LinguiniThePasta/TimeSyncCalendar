import logo from './logo.svg';
import './App.css';
import Signin from './components/SignIn'
import SignUp from "./components/SignUp";
import AuthDetails from "./components/AuthDetails"

function App() {
  let dates = new Date();
  return (
      <div className="App">
          <Signin/>
          <SignUp/>
          <AuthDetails/>
      </div>

  );
}
export default App;
