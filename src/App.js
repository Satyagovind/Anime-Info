import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
//import Create from "./Select";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            {/* <Create/> */}
            <Route exact path="/">
              <Home />
            </Route>
            <Details />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
