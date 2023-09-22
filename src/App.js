import logo from './logo.svg';
import './App.css';
import Signin from './components/SignIn'
import SignUp from "./components/SignUp";
import AuthDetails from "./components/AuthDetails"
import * as calendar from "./components/calendar";
import {generateDatesBetweenGivenDates} from "./components/calendar";

function App() {
    var dA = new Date("October 21, 2023");
    var dB = new Date("October 31, 2023");
    const datesArray = calendar.generateDatesBetweenGivenDates(dA, dB)
    console.log(dA.getDate());
    console.log(datesArray);
  return (
      <body>
        <nav className={"navBar"}>
            <button className="navLogoButton">
                SynCal
            </button>
            <ul className="navBarItems">
                <li className="navItems">
                    <a href="" className="navLink">Sign In</a>
                </li>
                <li className="navItems">
                    <a href="" className="navLink">Sign Up</a>
                </li>
            </ul>
        </nav>
        <div className={"heading"}>
            <div className={"monthAndYear"}>
                SEP 2023
            </div>
            <div className={"backAndForth"}>
                <button id={"back"}>BACK</button>
                <button id={"back"}>FORWARD</button>
            </div>
        </div>
        <div className={"Calendar"}>
            {datesArray.map((element) => (
                <div>
                    <div>
                        {element[1]}
                    </div>
                    <div>
                        {element[0]}
                    </div>
                </div>
            ))}
        </div>
      </body>
  )
}
export default App;
