import logo from './logo.svg';
import './App.css';
import Signin from './components/SignIn'
import SignUp from "./components/SignUp";
import AuthDetails from "./components/AuthDetails"

function App() {
  return (
      <body>
        <nav className={"navBar"}>
            <ul className="navBarItems">
                <li className="navItems">
                    <a href="" className="navLink">SynCal</a>
                </li>
                <li className="navItems">
                    <a href="" className="navLink">Sign In</a>
                </li>
                <li className="navItems">
                    <a href="" className="navLink">Sign Up</a>
                </li>
            </ul>
        </nav>
        <div className={"heading"}>
            SEP 2023
            <div className={"backAndForth"}>
                <button id={"back"}>BACK</button>
                <button id={"back"}>FORWARD</button>
            </div>
        </div>
        <div className={"Calendar"}>
            CALENDAR GOES HERE
        </div>
      </body>
  )
}
export default App;
