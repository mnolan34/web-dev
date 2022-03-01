import logo from './logo.svg';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Lab";
import Tuiter from "./components/Tuiter";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className = "container">
              <Route path="/hello">
                <HelloWorld/>
              </Route>
              <Route path="/labs">
                <Labs/>
              </Route>
              <Route path="/tuiter">
                <Tuiter/>
              </Route>
          </div>
      </BrowserRouter>
  );
}

export default App;
