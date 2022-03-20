//import logo from './logo.svg';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/labs/index.js";
import Tuiter from "./components/tuiter/index.js";
import HomeScreen from "./components/tuiter/HomeScreen/homeScreen";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className = "container">
                  <Route path = "/hello">
                        <HelloWorld/>
                  </Route>
                  <Route path = "/labs">
                         <Labs/>
                  </Route>
                  <Route path="/tuiter/home">
                     <HomeScreen/>
                  </Route>
                  <Route path="/tuiter/explore">
                      <ExploreScreen/>
                  </Route>
          </div>
      </BrowserRouter>
  );
}

export default App;
