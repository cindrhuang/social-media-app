import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Homepage } from "./components/Pages/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
