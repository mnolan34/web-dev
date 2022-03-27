//import logo from './logo.svg';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/labs/index.js";
import Tuiter from "./components/tuiter/index";
import HomeScreen from "./components/tuiter/home-screen-a7/index";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
import NotificationScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className = "container">
              <Routes>
                  <Route path = "/">
                      <Route index element = {<Labs/>}/>
                    <Route path = "hello"
                           element = {<HelloWorld/>}/>
                    <Route path = "labs"
                           exact = {true}
                            element = {<Labs/>}/>
                    <Route path = "tuiter"
                        element = {<Tuiter/>}>
                        <Route index
                             element = {<HomeScreen/>}/>
                        <Route path="explore"
                              element = {<ExploreScreen/>}/>
                        <Route path = "notifications"
                               element = {<NotificationScreen/>}/>
                    </Route>
                  </Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
