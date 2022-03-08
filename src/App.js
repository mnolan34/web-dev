//import logo from './logo.svg';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/labs/classes/index.js";
import Tuiter from "./components/tuiter/index.js";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className = "container">
                  <Route path = "/hello"
                        element = {<HelloWorld/>}/>
                  <Route path = "labs"
                         element = {<Labs/>}/>
                  <Route path = "/hello"
                         element = {<Tuiter/>}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
