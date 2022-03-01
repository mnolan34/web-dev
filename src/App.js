import logo from './logo.svg';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/labs/index";
import Index from "./components/tuiter/index";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className = "container">
              <Route path="/hello" exact={true}>
                <HelloWorld/>
              </Route>
              <Route path="/labs" exact={true}>
                <Labs/>
              </Route>
              <Route path="/tuiter" exact={true}>
                <Index/>
              </Route>
          </div>
      </BrowserRouter>
  );
}

export default App;
