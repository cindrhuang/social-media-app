import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Homepage } from "./components/Pages/Homepage";
import { MyPage } from "./components/Pages/MyPage";
import { NewPostPage } from './components/Pages/NewPostPage';
import { LoginPage } from "./components/Pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route path="/me">
            <MyPage/>
          </Route>
          <Route path="/new">
            <NewPostPage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
